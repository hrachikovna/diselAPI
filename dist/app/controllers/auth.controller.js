'use strict';

var User = require('../models/user.model.js');
var jwt = require('jsonwebtoken');

exports.createUser = function (req, res) {
    // create a sample user
    var nick = new User({
        name: 'john',
        password: 'john',
        admin: true
    });

    // save the sample user
    nick.save(function (err) {
        if (err) throw err;
        console.log('User saved successfully');
        res.json({ success: true });
    });
};
exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    User.find(function (err, users) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving notes." });
        } else {
            res.send(users);
        }
    });
};
exports.login = function (req, res) {

    console.log('request  is', req);

    // find the user
    User.findOne({
        name: req.body.username
    }, function (err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                var payload = {
                    admin: user.admin
                };
                var token = jwt.sign(payload, 'superUserSecretCode');

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
};