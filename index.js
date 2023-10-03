// import the express application
import express from 'express';
import compression from 'compression';

import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

const __dirname = dirname(fileURLToPath( import.meta.url)) + sep;

// configuration
const cfg =  {
    port: process.env.port || 3000,
    dir: {
        root: __dirname,
        static: __dirname + 'static' + sep
    }
};

// print the cfg object to the console 
console.dir(cfg, {depth: null, color: true});

// initialization
const app = express();

// console.log each request url (middleware)
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// use the compression middleware
app.use(compression());

// home page route
app.get('/', (req, res) => {
    res.send('Hello G!');
});

// /hello route
app.get('/hello/', (req, res) => {
    res.send(`Hello from the ${req.url} path`);
});

// server static files
app.use(express.static( cfg.dir.static ));

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${ cfg.port}`);
});

export { cfg, app };