import { Request, Response, Router } from "express";
import CategoryController from "../controllers/CategoryController";
import Authentication from "../middlewares/Authentication";
import Authorization from "../middlewares/Authorization";

const categoryRoutes = Router();

categoryRoutes.get("/", (req, res) => {
  CategoryController.index(req, res);
});
categoryRoutes.get("/:id", (req, res) => {
  CategoryController.show(req, res);
});

categoryRoutes.post(
  "/",
  [Authentication.check, Authorization.check],
  (req: Request, res: Response) => {
    CategoryController.store(req, res);
  }
);
categoryRoutes.put(
  "/:id",
  [Authentication.check, Authorization.check],
  (req: Request, res: Response) => {
    CategoryController.update(req, res);
  }
);
categoryRoutes.delete(
  "/:id",
  [Authentication.check, Authorization.check],
  (req: Request, res: Response) => {
    CategoryController.destroy(req, res);
  }
);

export default categoryRoutes;
