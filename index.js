// import the express application
import express from 'express';

// configuration
const cfg =  {
    port: process.env.port || 3000
};

// initialization
const app = express();

// home page route
app.get('/', (req, res) => {
    res.send('Hello G!');
});

app.get('/hello/', (req, res) => {
    res.send(`Hello from the ${req.url} path`);
});

app.use(express.static( 'static' ));

// start server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${ cfg.port}`);
});