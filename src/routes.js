const express = require("express");
const DevController = require('./controllers/DevController');
const routes = express.Router();


routes.get('/', (req, res)=>{
    return res.send('hello world');
})

/*routes.post( '/', DevController.store);*/

module.exports= routes;