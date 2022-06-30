import { NextFunction, Request, Response } from "express";

class QueryParams {
    execute(req: Request, res: Response, next: NextFunction) {
        const { search, sort, sortBy } = req.query;
        const page = parseInt(req.query.page as string);
        const perPage = parseInt(req.query.perPage as string);
        const sortDirection = (sort && sort == 'asc') ? 'asc' : 'desc';

        if(perPage > 30) {
            res.status(400).json({ error: 'Items per page must not be greater than 20' });
            return;
        }

        req.body.queryParams = {
            perPage: isNaN(perPage) ? 10 : perPage,
            page: isNaN(page) ? 1 : page,
            search: (search) ?? '',
            sort: sortDirection,
            sortBy: (sortBy) ?? '_id'
        };

        next();
    }
}

export default new QueryParams();
