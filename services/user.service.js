const { prisma } = require("../lib/prisma.js")
const bcrypt = require("bcryptjs");
const AppError = require("../utils/AppError.utils.js");


const createUser = async (data) => {
    if (!data.last_name || !data.first_name || !data.email || !data.password) {
        throw new AppError("All fields required", 400)
    }

    const existingEmail =  await prisma.user.findUnique({
        email: data.email
    })

    if (existingEmail) {
        throw new AppError("Email already exists", 409)
    }

    const password = data.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: hashedPassword
        }, omit: {
            password: true
        }
    })

    return user;
}

module.exports = {
    createUser
}