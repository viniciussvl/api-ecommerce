import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

class Authentication {
  async check(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "Unauthenticated" });
      return;
    }

    const secretKey: any = process.env.JWT_SECRET;

    try {
      const decoded: any = await jwt.verify(token, secretKey);
      req.body.userId = decoded.userId;
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid auth token" });
    }
  }
}

export default new Authentication();
