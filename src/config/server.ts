require("dotenv").config();

import express from "express";
import helmet from "helmet";
import routes from "../routes";
import cors from "cors";

const app = express();

const initServer = () => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(routes);

  app.get("/", (req, res) => {
    res.status(200).json({ message: "API Funcionando", status: "OK" });
  });

  return app;
};

export default {
  initServer,
};
