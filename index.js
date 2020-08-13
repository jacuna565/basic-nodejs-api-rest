let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/zoetic', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

(!db) ? console.log("Error connecting db") : console.log("Db connected successfully")

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('NodeJs + Express + mongo server :)'));

app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running ApiREST on port " + port);
});