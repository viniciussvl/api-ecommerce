import express from 'express';
import helmet from 'helmet';

require('dotenv').config();

const app = express();

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