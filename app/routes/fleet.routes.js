module.exports = function(app) {

    var fleet = require('../controllers/fleet.controller.js');

    // Create a new Note
    // app.post('/companies', upload.single('image'), companies.create );
    app.post('/fleet',  fleet.create );

    // Retrieve all Notes
    app.get('/fleet', fleet.findAll);
    app.get('/branch/fleet/:branchId', fleet.findByBranchID);
    app.get('/fleet/company/:companyId', fleet.findByCompanyID);
    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/fleet/:id', fleet.delete);
}





