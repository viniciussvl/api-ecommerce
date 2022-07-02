import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import formatValidatorErrors from "../../utils/formatValidatorErrors";

const loginValidator = [
  check("email").isEmail().withMessage("Invalid e-mail"),
  check("password")
    .isLength({ min: 6, max: 150 })
    .withMessage("Length between 6 and 150"),
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

module.exports = loginValidator;
