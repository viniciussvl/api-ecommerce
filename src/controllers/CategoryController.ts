import { Request, Response } from "express";
import CategoryDto from "../dto/CategoryDto";
import CategoryService from "../services/CategoryService";

class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  public async index(req: Request, res: Response) {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json({ categories: categories });
    } catch (error) {
      res.status(400).json({ error: "Internal server error" });
    }
  }

  public async show(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const category = await this.categoryService.getCategory(id);
      res.status(200).json(category);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public async store(req: Request, res: Response) {
    const data = req.body as CategoryDto;

    try {
      const category = await this.categoryService.create(data);
      res
        .status(201)
        .json({ category: category, message: "Category created successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public async update(req: Request, res: Response) {
    const data = req.body as CategoryDto;
    const id = req.params.id;

    try {
      this.categoryService.update(id, data);
      res.status(201).json({ message: "Category updated successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public async destroy(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await this.categoryService.delete(id);
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new CategoryController();
