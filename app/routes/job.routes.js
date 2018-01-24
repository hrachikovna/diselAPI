module.exports = function(app) {

    var job = require('../controllers/job.controller.js');

    // Create a new Note
    // app.post('/companies', upload.single('image'), companies.create );
    app.post('/job',  job.create );

    // Retrieve all Notes
    app.get('/job', job.findAll);
    // Retrieve all Jobs by CompanyId
    app.get('/job/company/:id', job.getJobsByCompanyId);
    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/job/:id', job.delete);
}





