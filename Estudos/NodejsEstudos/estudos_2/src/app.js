const express = require('express');
const cors = require('cors')
const routes = require('./routes')
class App{
    constructor(){
        this.server = express();
        this.Middlewares();
        this.Routes();
    }

    Middlewares(){
        this.server.use(express.json());
        this.server.use(cors());
    }

    Routes(){
      this.server.use(routes);  
    }

}


module.exports = new App().server;