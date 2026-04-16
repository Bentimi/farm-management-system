const { prisma } = require("../lib/prisma");
const AppError = require("../utils/AppError.utils");

const getOrders = async (userId, page, pageSize) => {
    const userAuth = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!userAuth) {
        throw new AppError("Unauthorized user", 401);
    }
    if (!userAuth.active) {
        throw new AppError("Unauthorized user", 403);
    }

    const skip = (page - 1) * pageSize;

    const orders = await prisma.order.findMany({
        where: { orderedUserId: userId },
        skip: skip,
        take: pageSize,
        orderBy: { orderedDate: "desc" },
        include: {
            carts: {
                include: {
                    product: true
                }
            }
        }
    });

    const totalOrders = await prisma.order.count({
        where: { orderedUserId: userId }
    });

    return {
        orders,
        pagination: {
            total: totalOrders,
            page,
            pageSize,
            totalPages: Math.ceil(totalOrders / pageSize)
        }
    };
};

module.exports = {
    getOrders
};
