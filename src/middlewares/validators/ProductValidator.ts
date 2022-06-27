import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';
import formatValidatorErrors from '../../utils/'


const ProductValidator = [
    check('name').isLength({ min: 3, max: 150 }),
    check('content').isLength({ min: 6 }).withMessage('Mininum length is 6'),
    check('categoryId').isMongoId().withMessage('Invalid category id').bail()
    .custom(async (value) => {
        try {
            const category = await Category.findById(value);
        } catch (error) {
            throw new Error('Category not found');
        }

        return true;
    }),
    check('status').isBoolean(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: formatValidatorErrors.common(errors.array()) });
        }

        next();
    }
];

export default ProductValidator;