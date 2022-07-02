import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import formatValidatorErrors from "../../utils/formatValidatorErrors";
import User from "../../models/User";

const registerValidator = [
  check("firstName")
    .isLength({ min: 3, max: 100 })
    .withMessage("Length between 3 and 100"),
  check("lastName")
    .isLength({ min: 3, max: 100 })
    .withMessage("Length between 3 and 100"),
  check("email")
    .isEmail()
    .withMessage("Invalid e-mail")
    .custom(async (value, { req }) => {
      const userExists = await User.findOne({ email: value });
      if (userExists) {
        throw new Error("User exists");
      }

      return true;
    }),
  check("password")
    .isLength({ min: 6, max: 150 })
    .withMessage("Length between 6 and 150"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom(async (value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("The passwords do not match");
      }

      return true;
    }),
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

module.exports = registerValidator;
