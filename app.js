const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { xss } = require('express-xss-sanitizer');
require("dotenv").config();

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors({
     origin: [
        'http://localhost:5173', 
        'http://localhost:5174', 
        'http://localhost:5175', 
    ], 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(express.json());
app.use(xss());

app.get('/', (req, res) => {
    res.send("Welcome to Agritronix server");
})


module.exports = app;