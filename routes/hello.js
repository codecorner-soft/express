// /hello/ route

import { Router } from "express";
import { hello } from "../lib/locale.js";
import { capitalize } from "../lib/string.js";

export const helloRouter = Router();

helloRouter.get('/', (req, res, next) => {
    res.render(
        'message', {
            title : `Just hello`,
            route: `${req.baseUrl}`
        }
    );
});

// say hello in English
helloRouter.get('/:name', (req, res, next) => {
    res.render(
        'message', {
            title: `${hello.en} ${capitalize(req.params.name)}!`,
            route: `${req.originalUrl}`
        }
    );
});

// say hello in a specific language
// defaults to english if language is not found
helloRouter.get('/:lang/:name', (req, res, next) => {
    res.render(
        'message',
        {
            title: `${hello[req.params.lang] || hello.en} ${capitalize(req.params.name)}!`,
            route: `${req.originalUrl}`
        }
    );
});

