import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import CategoryService from "../../services/CategoryService";
import formatValidatorErrors from "../../utils/formatValidatorErrors";

const productValidator = [
  check("name").isLength({ min: 3, max: 150 }),
  check("price").isNumeric(),
  check("description")
    .isLength({ min: 6, max: 255 })
    .withMessage("Length between 6 and 255"),
  check("categoryId")
    .isMongoId()
    .withMessage("Invalid category id")
    .bail()
    .custom(async (categoryId) => {
      try {
        const categoryService = new CategoryService();
        await categoryService.getCategory(categoryId);
      } catch (error) {
        throw new Error("Category not found");
      }

      return true;
    }),
  check("status").isBoolean(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .json({ errors: formatValidatorErrors.common(errors.array()) });
    }

    next();
  },
];

module.exports = productValidator;
