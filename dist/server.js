'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var cors = require('cors');
// create express app
var app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// use cors
app.use(cors());

// use morgan to log requests to the console
app.use(morgan('dev'));

// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database");
});

app.set('superSecret', dbConfig.secret); // secret variable


// define a simple route
app.get('/', function (req, res) {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

// Require  routes
require('./app/routes/setup.routes.js')(app);
require('./app/routes/auth.routes.js')(app);
// route middleware to verify a token
app.use(function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, 'superUserSecretCode', function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

require('./app/routes/company.routes.js')(app);
require('./app/routes/branch.routes.js')(app);
require('./app/routes/fleet.routes.js')(app);
require('./app/routes/job.routes.js')(app);
require('./app/routes/vehicle.routes.js')(app);
require('./app/routes/jobPart.routes.js')(app);
require('./app/routes/serviceSchedule.routes.js')(app);

// listen for requests
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});