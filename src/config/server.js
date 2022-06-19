require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const app = express();


// Routes
const authRoutes = require('../routes/auth');


const initServer = () => {
    app.use(helmet());
    app.use(express.json());
    app.use('/auth', authRoutes);
    return app;
}

module.exports = {
    initServer
}