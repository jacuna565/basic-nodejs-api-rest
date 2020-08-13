let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require("./api-routes");

require('dotenv').config({path: '.env'});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

(!db) ? console.log("Error connecting db") : console.log("Db connected successfully")


app.get('/', (req, res) => res.send('NodeJs + Express + mongo server :)'));

app.use('/api', apiRoutes);

// Launch app to listen to specified port

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

app.listen(port, host, () =>{
    console.log("Running ApiREST on port " + port); 
});