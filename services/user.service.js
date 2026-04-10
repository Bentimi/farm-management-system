const { prisma } = require("../lib/prisma")
const bcrypt = require("bcryptjs");
const AppError = require("../utils/AppError.utils.js");
const { generateUsername } = require("../utils/dataNormalization.utils.js");


const createUser = async (data) => {
    if (!data.last_name || !data.first_name || !data.email || !data.password) {
        throw new AppError("All fields required", 400)
    }

    const existingEmail =  await prisma.user.findUnique({
        where: {
            email: data.email
        }
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

    if (!existingUser.active) {
        throw new AppError("Account not activated", 403)
    }

    const user = await prisma.user.update({
        where: {
            id: existingUser.id
        },
        data: {
            last_login: new Date()
        }
    })

    const { password, ...userWithoutPassword } = user;

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

    if (userAuth.id !== targetId && userAuth.role !== "admin" && userAuth.role !== "staff") {
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

    if (!profile || profile.length === 0) {
        throw new AppError("Profile not found", 404)
    }

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

    if (userAuth.id !== targetId && userAuth.role !== "admin" && userAuth.role !== "staff") {
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

const userActiveStatus = async (userId, targetId) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (userAuth.id !== targetId && userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 401)
    }

    const user = await prisma.user.findUnique({
        where: {
            id: targetId
        }
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: targetId
        },
        data: {
            active: !user.active
        },
        omit: {
            password: true
        }
    })

    return {data: updatedUser};
}

const changePassword = async (userId, data) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id : userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!userAuth.active) {
        throw new AppError("Account is inactive", 403)
    }

    if (!data.current_password || !data.new_password) {
        throw new AppError("All fields required", 400)
    }

    const comparePassword = await bcrypt.compare(data.current_password, userAuth.password);

    if (!comparePassword) {
        throw new AppError("Current password is incorrect", 400)
    }

    const validateNewPassword = await bcrypt.compare(data.new_password, userAuth.password);

    if (validateNewPassword) {
        throw new AppError("New password cannot be the same as the current password", 400)
    }

    const hashedPassword = await bcrypt.hash(data.new_password, 10);

    const user = await prisma.user.update({
        where: {
            id: userAuth.id
        },
        data: {
            password: hashedPassword
        },
        omit: {
            password: true
        }
    })
    return user
}

const roleAllocation = async (userId, targetId, data) => {
    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (userAuth.role !== "admin" || userAuth.id === targetId) {
        throw new AppError("Unauthorized user", 401)
    }

    const existingUser = await prisma.user.findUnique({ 
        where: {
            id: targetId
        }
    })

    if (!existingUser) {
        throw new AppError("User not found", 404)
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: targetId
        },
        data: {
            role: data.role
        },
        omit: {
            password: true
        }
    })

    return updatedUser;

}

const getUsers = async (userId, page, pageSize) => {

    const userAuth = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401)
    }

    if (!userAuth.active) {
        throw new AppError("Account is inactive", 403)
    }

    if (userAuth.role !== "admin" && userAuth.role !== "staff") {
        throw new AppError("Unauthorized user", 403)
    }

    const users = await prisma.user.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        omit: {
            password: true
        }
    })

    // console.log(users)

    // console.log("Users fetched successfully")

    // if (!users || users.length === 0) {
    //     throw new AppError("No user found", 404)
    // }

    return users;

}

module.exports = {
    createUser,
    loginUser,
    userProfile,
    updateUser,
    userActiveStatus,
    changePassword,
    roleAllocation,
    getUsers
}