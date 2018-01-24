'use strict';

module.exports = function (app) {

    var branch = require('../controllers/branch.controller.js');

    // Create a new Note
    // app.post('/companies', upload.single('image'), companies.create );
    app.post('/branch', branch.create);

    // Retrieve all Notes
    app.get('/branch', branch.findAll);

    //Retrive all Branches by CompanyId
    app.get('/branch/company/:companyId', branch.getBranchesByCompany);
    //Retrive all Fleets by BranchId

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/branch/:id', branch.delete);
};