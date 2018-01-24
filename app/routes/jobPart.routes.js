module.exports = function(app) {

    var jobPart = require('../controllers/job.controller.js');

    // Create a new Note
    // app.post('/companies', upload.single('image'), companies.create );
    app.post('/job-part',  jobPart.create );

    // Retrieve all Notes
    app.get('/job-part', jobPart.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/job-part/:id', jobPart.delete);
}





