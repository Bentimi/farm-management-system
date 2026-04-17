const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { xss } = require('express-xss-sanitizer');
const { errorHandler } = require("./middleware/errorHandling.middleware");
const { responseHandler } = require("./middleware/responseHandler.middleware");
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");
const paymentRoutes = require("./routes/payment.route");
const orderRoutes = require("./routes/order.route");
require("dotenv").config();

const app = express();

app.set('trust proxy', 1);

app.use(cookieParser());
app.use(helmet());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
        process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with']
}));
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(express.json());
app.use(xss());

app.use(responseHandler)

app.get('/', (req, res) => {
    res.send("Welcome to Agritronix server");
})

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/payment', paymentRoutes);
app.use('/order', orderRoutes);


app.use(errorHandler);

module.exports = app;