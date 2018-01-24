'use strict';

module.exports = function (app) {

    var serviceSchedule = require('../controllers/serviceSchedule.controller.js');

    // Create a new Note
    // app.post('/companies', upload.single('image'), companies.create );
    app.post('/service-schedule', serviceSchedule.create);

    // Retrieve all Notes
    app.get('/service-schedule', serviceSchedule.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/service-schedule/:id', serviceSchedule.delete);
};