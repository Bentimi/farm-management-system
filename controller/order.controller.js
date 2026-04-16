const orderService = require("../services/order.service");

const get_orders = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        
        const data = await orderService.getOrders(userId, page, pageSize);
        
        res.success(data, "Orders retrieved successfully");
    } catch (e) {
        console.log(e);
        next(e);
    }
};

module.exports = {
    get_orders
};
