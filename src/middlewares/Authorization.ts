import { NextFunction, Request, Response } from "express";
import User from "../models/User";

class Authorization {
  async check(req: Request, res: Response, next: NextFunction) {
    const user: any = await User.findById(req.body.userId);
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    if (!user.role || user.role !== "admin") {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    next();
  }
}

export default new Authorization();
