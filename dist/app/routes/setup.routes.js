'use strict';

module.exports = function (app) {

    var auth = require('../controllers/auth.controller.js');

    // Create a new User
    app.post('/setup', auth.createUser);
    app.get('/users', auth.findAll);
};