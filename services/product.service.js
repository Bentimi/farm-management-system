const { prisma } = require("../lib/prisma");
const AppError = require("../utils/AppError.utils");
const cloudinary = require("../config/cloudinary.config");
const userValidation = require("../validation/user.validation");

const createProduct = async (userId, data, file) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401)
    }

    if (!userAuth.active) {
        throw new AppError("Inactive user", 403)
    }

    if (!data.name || !data.price || !data.quantity || !data.categoryId) {
        throw new AppError("All fields are required", 400)
    }

    const existingProduct = await prisma.product.findFirst({
        where: {
            name: data.name
        }
    })

    if (existingProduct) {
        throw new AppError("Product already exists", 409)
    }

    const existingCategory = await prisma.productCategory.findUnique({
        where: {
            id: data.categoryId
        }
    })

    if (!existingCategory) {
        throw new AppError("Category does not exist", 404)
    }

    let photoUrl = null;
    if (file) {
        const uploadResult = await cloudinary.uploader.upload(file.path, {
            folder: "products",
            public_id: `product_cover_${Date.now()}`
        });
        photoUrl = uploadResult.secure_url;
    }

    const result = await prisma.$transaction(async (tx) => {

        const newProduct = await tx.product.create({
            data: {
                name: data.name,
                description: data.coverDescription || '',
                price: data.price,
                newPrice: data.newPrice || null,
                photo: photoUrl,
                quantity: data.quantity,
                categoryId: existingCategory.id,
                // draft: data.draft === undefined || data.draft === true ? true : false,
                // approved: 'pending',
                updatedById: userId,
                last_updated: new Date()
            },
            include: {
                category: true,
                updatedBy: {
                    omit: {
                        password: true
                    }
                }
            }
        })

        
        return { product: newProduct };

    })
    return result;
}

const uploadProductImage = async (file, productId, userId) => {

    const uploadProduct = await cloudinary.uploader.upload(file.path, {
            folder: "products",
            public_id: `product_${productId}`
        })

        const updatedProduct = await prisma.product.update({
            where: { id: productId },
            data: { 
                photo: uploadProduct.secure_url,
                updatedById: userId,
                last_updated: new Date()
            },
            include: {
                category: true,
                updatedBy: {
                    omit: {
                        password: true
                    }
                }
            }
        });
    return { product: updatedProduct }
}

const updateProduct = async (userId, targetId, data, file) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Inactive user", 403);
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401);
    }
    
    const existingProduct = await prisma.product.findUnique({
        where: {
            id: targetId
        }
    });

    if (!existingProduct) {
        throw new AppError("Product not found", 404);
    }

    const result = await prisma.$transaction(async (tx) => {

        const existingCategory = await tx.productCategory.findUnique({
            where: {
                id: data.categoryId
            }
        })

        if (!existingCategory) {
            throw new AppError("Category do not exist", 404)
        }

        let photoUrl = existingProduct.photo;

        // Handle file upload if provided
        if (file) {
            const uploadProduct = await cloudinary.uploader.upload(file.path, {
                folder: "products",
                public_id: `product_${targetId}_${Date.now()}`
            });
            photoUrl = uploadProduct.secure_url;
        }

        const updateData = {
            name: data.name,
            description: data.coverDescription || existingProduct.description || '',
            price: data.price,
            newPrice: data.newPrice || null,
            quantity: data.quantity,
            categoryId: existingCategory.id,
            photo: photoUrl,
            draft: data.draft !== undefined ? (typeof data.draft === 'string' ? data.draft === 'true' : data.draft) : existingProduct.draft,
            approved: data.approved || existingProduct.approved,
            approvedById: userAuth.id,
            updatedById: userAuth.id,
            last_updated: new Date()
        };

        const updatedProduct = await tx.product.update({
            where: {
                id: existingProduct.id
            },
            data: updateData,
            include: {
                category: true,
                updatedBy: {
                    omit: {
                        password: true
                    }
                }
            }
        });

        return updatedProduct;
    });

    return result;
}

const addDescription = async (userId, productId, data, files) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Inactive user", 403);
    }

    if (!data.description) {
        throw new AppError("Description is required", 400);
    }

    const existingProduct = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if (!existingProduct) {
        throw new AppError("Product not found", 404);
    }

    let uploadedUrls = [];
    if (files && files.length > 0) {
        const uploadPhotos = await Promise.all(
            files.map((file, index) =>
                cloudinary.uploader.upload(file.path, {
                    folder: "product_descriptions",
                    public_id: `desc_${productId}_${Date.now()}_${index}`,
                    resource_type: "image"
                })
            )
        );
        uploadedUrls = uploadPhotos.map(u => u.secure_url);
    }

    const existingDesc = await prisma.productDescription.findFirst({
        where: { productId: productId }
    });

    let parsedRetainedImages = existingDesc?.photo || [];
    if (data.retainedImages !== undefined) {
        try {
            parsedRetainedImages = typeof data.retainedImages === 'string' ? JSON.parse(data.retainedImages) : data.retainedImages;
        } catch (e) {
            parsedRetainedImages = [];
        }
    }

    let currentPhotos = [...parsedRetainedImages, ...uploadedUrls];

    const result = await prisma.$transaction(async (tx) => {

        const updatedProduct = await tx.product.update({
            where: {
                id: productId
            },
            data: {
                last_updated: new Date()
            },
            include: {
                category: true,
                descriptions: true,
                updatedBy: {
                    omit: {
                        password: true
                    }
                }
            }
        });

        if (existingDesc) {
            await tx.productDescription.update({
                where: { id: existingDesc.id },
                data: {
                    description: data.description,
                    photo: currentPhotos,
                }
            });
        } else {
            await tx.productDescription.create({
                data: {
                    productId: productId,
                    description: data.description,
                    photo: currentPhotos
                }
            });
        }

        return { product: updatedProduct };
    });

    return result;
}

const updateProductDescription = async (userId, productId, descriptionId, data, files) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Inactive user", 403);
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401);
    }

    const existingProduct = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if (!existingProduct) {
        throw new AppError("Product not found", 404);
    }

    const existingDescription = await prisma.productDescription.findUnique({
        where: {
            id: descriptionId,
            productId: existingProduct.id
        }
    });

    if (!existingDescription) {
        throw new AppError("Product description not found", 404);
    }

    const result = await prisma.$transaction(async (tx) => {

        const updateDescription = await tx.productDescription.update({
            where: {
                id: existingDescription.id
            },
            data: {
                description: data.description,
                last_updated: new Date()
            },
            include: {
                product: true
            }
        });

        return { description: updateDescription };
    });

    return result;
}

const uploadProductImages = async (userId, files, descriptionId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("User does not exist", 404);
    }

    if (!userAuth.active) {
        throw new AppError("Account not activated", 401)
    }

    const existingDescription = await prisma.productDescription.findUnique({
        where: {
            id: descriptionId,
        }
    }); 

     if (!existingDescription) {
        throw new AppError("Product description not found", 404);
    }


     let photoUrl = existingProduct.photo;
        
        // Handle file uploads if provided
        if (files && files.length > 0) {
            const uploadPhotos = await Promise.all(
                files.map((file, index) =>
                    cloudinary.uploader.upload(file.path, {
                        folder: index === 0 ? "products" : "product_descriptions",
                        public_id: `product_${productId}_${Date.now()}_${index}`,
                        resource_type: "image"
                    })
                )
            );

            // First image is product photo
            if (uploadPhotos.length > 0) {
                photoUrl = uploadPhotos[0].secure_url;
            }
        }
    
    const updatedImages = await prisma.productDescription.update({
        where: {
            id: descriptionId
        },
        data: {
            photo: photoUrl,
            last_updated: new Date()
        },
        include: {
            product: true
        }
    })

    return { result: updatedImages }

}

const createCategory = async (userId, data) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Inactive user", 403);
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401);
    }

    if (!data.category) {
        throw new AppError("Category name is required", 400);
    }

    const existingCategory = await prisma.productCategory.findUnique({
        where: {
            category: data.category
        }
    });

    if (existingCategory) {
        throw new AppError("Category already exists", 409);
    }

    const newCategory = await prisma.productCategory.create({
        data: {
            category: data.category
        }
    });

    return { category: newCategory };
}

const productApproval = async (userId, productId, data) => {
    const userAuth = await prisma.product.findUnique({
        where: {
            id: userId
        }
    });

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401);
    }

    if (!data.approval) {
        throw new AppError("Field is required", 400);
    }

    const existingProduct = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })

    if (!existingProduct) {
        throw new AppError("Product not found", 404)
    }

    const updatedProduct = await prisma.product.update({
        where: {
            id: existingProduct.id
        },
        data: {
            ...data
        }
    })

    return { product: updatedProduct }
}

const productPublish = async (userId, productId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 401);
    }

    if (userAuth.role !== "admin") {
        throw new AppError("Unauthorized user", 403)
    }

    const existingProduct = await prisma.product.findUnique({
        where: {
            id: productId
        }
    });

    if (!existingProduct) {
        throw new AppError("Product not found", 404);
    }

    let status;
    let approvedBy;

    if (existingProduct.draft) {
        status = false
        approvedBy = userAuth.id;
    } else {
        status = true
    }

    const updatedProduct = await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            draft: status,
            approvedById: approvedBy,
            updatedById: userAuth.id,
            last_updated: new Date()
        }
    })
    return { product: updatedProduct }
}

const addToCart = async (userId, productId, data) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    if (!data.quantity || data.quantity <= 0) {
        throw new AppError("A valid quantity is required", 400);
    }


    const existingProduct = await prisma.product.findUnique({
        where: {
            id: productId
        }
    })

    if (!existingProduct) {
        throw new AppError("Product not found", 404);
    }

    const result = await prisma.$transaction(async (tx) => {

        if (existingProduct.quantity < data.quantity) {
            throw new AppError(`Insufficient product quantity, available: ${existingProduct.quantity}`, 400);
        }


        const productPrice = existingProduct.newPrice ?? existingProduct.price

        const cartItem = await tx.cart.create({
            data: {
                productId: existingProduct.id,
                userId: userAuth.id,
                quantity: data.quantity,
                price: productPrice,
                total_price: productPrice.mul(data.quantity)
            },
            include: {
                user: {
                    omit: {
                        password: true
                    }
                },
                order: true
            }

        })

        return { cart: cartItem }
    })
    return result;
}

const editCartItem = async (userId, cartId) => {

    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    if (!data.quantity || data.quantity <= 0) {
        throw new AppError("A valid quantity is required", 400);
    }

    const result = await prisma.$transaction(async (tx) => {

        const existingCart = await tx.cart.findUnique({
            where: {
                id: cartId
            }
        })


        if (!existingCart) {
            throw new AppError("Cart item not found", 404);
        }

        if (existingCart.userId !== userAuth.id) {
            throw new AppError("Unauthorized user", 401);
        }

        const existingProduct = await tx.product.findUnique({
            where: {
                id: existingCart.productId
            }
        })

        if (!existingProduct) {
            throw new AppError("Product not found", 404);
        }

        const productPrice = existingProduct.newPrice ?? existingProduct.price

        const updatedCart = await tx.cart.update({
            where: {
                id: existingCart.id
            },
            data: {
                quantity: data.quantity,
                price: productPrice,
                total_price: productPrice.mul(data.quantity)
            },
            include: {
                user: {
                    omit: {
                        password: true
                    }
                },
                order: true
            }
        })

        return { cart: updatedCart };
    })

    return result;
}

const deleteCartItem = async (userId, cartId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    const result = await prisma.$transaction(async (tx) => {
        const existingCart = await tx.cart.findUnique({
            where: {
                id: cartId
            }
        });

        if (!existingCart) {
            throw new AppError("Cart item not found", 404);
        }

        if (existingCart.userId !== userAuth.id) {
            throw new AppError("Unauthorized user", 401);
        }

        const deletedCart = await tx.cart.delete({
            where: {
                id: existingCart.id
            }
        });

        return { cart: deletedCart };
    });

    return result;
}


const getCart = async (userId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    const cartItems = await prisma.cart.findMany({
        where: {
            userId: userAuth.id,
            orderId: null
        }
    })

    if (cartItems.length === 0) {
        throw new AppError("Cart is empty", 404);
    }

    const totalPrice = cartItems
        .map(item => item.total_price)
        .reduce((sum, price) => sum.add(price));

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return { cart: cartItems, totalPrice, totalItems }
}


const getCategories = async (userId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    const categories = await prisma.productCategory.findMany({
        orderBy: {
            category: 'asc'
        }
    })

    return categories;
}

const getProducts = async (userId, page, pageSize) => {

    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }

    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 403)
    }

    const products = await prisma.product.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
            category: true,
            carts: true,
            descriptions: true
        }
    })

    // if (!products || products.length === 0) {
    //     throw new AppError("No product found", 404);
    // }

    return products;

}

module.exports = {
    createProduct,
    uploadProductImage,
    updateProduct,
    addDescription,
    updateProductDescription,
    uploadProductImages,
    createCategory,
    productApproval,
    productPublish,
    addToCart,
    editCartItem,
    deleteCartItem,
    getCart,
    getProducts,
    getCategories
}