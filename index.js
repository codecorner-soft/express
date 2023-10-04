import express from 'express'; // Express.js app
import compression from 'compression'; // compression

import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';

// configuration
const __dirname = dirname(fileURLToPath( import.meta.url)) + sep,
    cfg =  {
    port: process.env.port || 3000,
    dir: {
        root: __dirname,
        static: __dirname + 'static' + sep,
        views : __dirname + 'views' + sep
    }
};

// print the cfg object to the console 
console.dir(cfg, {depth: null, color: true});

// use EJS templates
app.set('view engine', 'ejs');
app.set('vies', cfg.dir.views);

// initialization
const app = express();

// do not identify Express
app.disable('x-powered-by');

// use the compression middleware
app.use(compression());

// console.log each request url (middleware)
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// home page route
app.get('/', (req, res) => {
    res.render('message', {title: 'Hello World!'});
});

// another route
app.get('/hello/', (req, res) => {
    res.render('message', {title: 'Hello again!'});
});

// server static assets
app.use(express.static( cfg.dir.static ));

// 404 error
app.use((req,res) => {
    res.status(404).render('message', {title: 'Not found'});
});

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${ cfg.port}`);
});

export { cfg, app };