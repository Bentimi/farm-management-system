const { prisma } = require("../lib/prisma");
const AppError = require("../utils/AppError.utils");
const cloudinary = require("../config/cloudinary.config");

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

    if (!data.name || !data.description || !data.price || !data.quantity || !data.category) {
        throw new AppError("All fields are required", 400)
    }

    if (!file) {
        throw new AppError("Product image is required", 400)
    }

    const existingProduct = await prisma.product.findUnique({
        where: {
            name: data.name
        }
    })

    if (existingProduct) {
        throw new AppError("Product already exists", 409)
    }

    const exsitingCategory = await prisma.productCategory.findUnique({
        where: {
            category: data.category
        }
    })

    if (!exsitingCategory) {
        throw new AppError("Category not found", 404)
    }

    const result = await prisma.$transaction(async (tx) => {

        const newProduct = await tx.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                quantity: data.quantity,
                category: data.category,
                photo: data.image,
                uploadedBy: userId,
                last_updated: new Date()
            }
        })

        const uploadProduct = cloudinary.uploader.upload(file.path, {
            folder: "products",
            public_id: `product_${newProduct.id}`,
            resource_type: "image"
        })

        const updatedProduct = await tx.product.update({
            where: { id: newProduct.id },
            data: { photo: uploadProduct.secure_url }
        });

        return updatedProduct;

    })
    return result;
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

    const uploadProduct = cloudinary.uploader.upload(file.path, {
            folder: "products",
            public_id: `product_${existingProduct.id}`,
            resource_type: "image"
        })

    const updatedProduct = await prisma.product.update({
        where: {
            id: existingProduct.id
        },
        data: {
            photo: uploadProduct.secure_url,
            category: data.category,
            description: data.description,
            name: data.name,
            last_updated: new Date()
        }
    })

    return updatedProduct;

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

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401);
    }

    if (!files) {
        throw new AppError("At least one product description image is required", 400);
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

    const result = await prisma.$transaction(async (tx) => {

        const uploadPhotos = await Promise.all(
            files.map((file, index) =>
                cloudinary.uploader.upload(file.path, {
                    folder: "product_descriptions",
                    public_id: `product_${productId}_description_${Date.now()}_${index}`,
                    resource_type: "image"
                })
            )
        );

        const updatedPhotos = uploadPhotos.map(upload => upload.secure_url);

        const addDescription = await tx.productDescription.create({
            data: {
                productId: productId,
                description: data.description,
                photo: updatedPhotos,
                last_updated: new Date()
            }
        });

        return { description: addDescription };
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

        const uploadPhotos = await Promise.all(
            files.map((file, index) =>
                cloudinary.uploader.upload(file.path, {
                    folder: "product_descriptions",
                    public_id: `product_${productId}_description_${Date.now()}_${index}`,
                    resource_type: "image"
                })
            )
        );
        const updatedPhotos = uploadPhotos.map(upload => upload.secure_url);

        const updateDescription = await tx.productDescription.update({
            where: {
                id: existingDescription.id
            },
            data: {
                description: data.description,
                photo: updatedPhotos,
                last_updated: new Date()
            }
        });

        return { description: updateDescription };
    });

    return result;
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
                category: data.category,
                addedBy: userId,
                last_updated: new Date()
            }
        });

        return { category: newCategory};
}

const productApproval = async (userId, productId, data) => {
    const userAuth = await prisma.product({
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

    if (userAuth.role !== "admin" && userAuth.role !=="staff") {
        throw new AppError("Unauthorized user", 401);
    }

    if (!data.approval) {
        throw new AppError("Field is required", 400);
    }

    const existingProduct = await prisma.product({
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
        data : {
            ...data
        }
    })

    return { product: updatedProduct }

}

module.exports = {
    createProduct,
    updateProduct,
    addDescription,
    updateProductDescription,
    createCategory,
    productApproval
}