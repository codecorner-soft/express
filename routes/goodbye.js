import { Router } from "express";

export const goodbyeRouter = Router();

goodbyeRouter.get('/', (req, res, next) => {
    res.render(
        'message', {
            title : `Goodbye`,
            route: `${req.baseUrl}`
        }
    );
});