const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Zoetic API",
            description: "Zoetic API Information",
            contac: {
                name: "Jan Acuna",
            },
            servers:["http://localhost:8080","https://basic-nodejs-api-rest.herokuapp.com/"]
        }
    },
    apis:["api-routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

let apiRoutes = require("./api-routes");

require('dotenv').config({path: '.env'});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

(!db) ? console.log("Error connecting db") : console.log("Db connected successfully")


// app.get('/', (req, res) => res.send('NodeJs + Express + mongo server :)'));

app.use('/', apiRoutes);

// Launch app to listen to specified port

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

app.listen(port, host, () =>{
    console.log("Running ApiREST on port " + port); 
});