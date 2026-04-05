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

}


module.exports = {
    createProduct,
    updateProduct
}