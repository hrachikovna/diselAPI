'use strict';

module.exports = function (app) {
    var auth = require('../controllers/auth.controller.js');
    // Create a new User
    app.post('/login', auth.login);
};