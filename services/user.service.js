const { prisma } = require("../lib/prisma.js")
const bcrypt = require("bcryptjs");
const AppError = require("../utils/AppError.utils.js");
const { generateUsername } = require("../utils/dataNormalization.utils.js");


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

    const generated_username = generateUsername(data.first_name, data.last_name);

    const user = await prisma.user.create({
        data: {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            username: generated_username,
            password: hashedPassword
        }, omit: {
            password: true
        }
    })

    return user;
}

const loginUser = async (data) => {
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [
                { email: data.credential },
                { username: data.credential }
            ]
        }
    })

    if (!existingUser) {
        throw new AppError("Invalid credentials", 401)
    }

    const comparePassword =  await bcrypt.compare(data.password, existingUser.password);

    if (!comparePassword) {
        throw new AppError("Invalid credentials", 401)
    }

    await existingUser.update({
        data: {
            last_login: new Date()
        }
    })

    const { password, ...userWithoutPassword } = existingUser;

    return { user: userWithoutPassword };

}

const userProfile = async (userId, targetId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!userAuth.id === targetId || (!userAuth.role === "admin" || !userAuth.role === "staff")) {
        throw new AppError("Unauthorized user", 401)
    }

    const profile = await prisma.user.findUnique({
        where: {
            id: targetId
        },
        omit: {
            password: true
        }
    })

    return profile;
}

const updateUser = async (userId, targetId, data) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!userAuth.id === targetId || (!userAuth.role === "admin" || !userAuth.role === "staff")) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!data.first_name || !data.last_name || !data.email || !data.phone_number || !data.gender || !data.marital_status) {
        throw new AppError("All fields required", 400)
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: targetId
        },
        data: {
            ...data
        },
        omit: {
            password: true
        }
    })

    return updatedUser;

}

module.exports = {
    createUser,
    loginUser,
    userProfile,
    updateUser
}