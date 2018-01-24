'use strict';

var path = require('path');
var fs = require('fs');
var del = require('del');

var multer = require('multer');
// set the directory for the uploads to the uploaded to

var DIR = './uploads/companies/';

var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, DIR);
    },
    filename: function filename(req, file, cb) {
        var originalnameArr = file.originalname.split('.');
        var postfix = originalnameArr[originalnameArr.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + postfix);
    },
    allowedImagesExts: ['jpg', 'png', 'gif', 'jpeg'],
    fileFilter: function fileFilter(req, file, cb) {
        cb(null, allowedImagesExts.includes(file.originalname.split('.').pop()));
    }
});

upload = multer({ storage: storage });

module.exports = function (app) {

    var company = require('../controllers/company.controller.js');

    // Create a new Note
    // app.post('/companies', upload.single('image'), companies.create );
    app.post('/company', company.create);
    // Retrieve all Companies
    app.get('/company', company.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/notes/:noteId', notes.findOne);
    //
    // // Update a Note with noteId
    // app.put('/notes/:noteId', notes.update);
    //
    // Delete a Note with noteId
    app.delete('/company/:id', company.delete);
};

// let auth = self.serviceAuthenticate ?
//     self.applicationService.addAuthenticateService(applicationUuid,
//     values.applicationName, values.applicationDescription,
//     values.applicationLoginPage,
//     self.authenticationProtocolIdSelected) : Observable.of({});
// let sanc = self.serviceSanctum ?
//     self.applicationService.addSanctumService(applicationUuid,
//         values.applicationName, values.applicationDescription) : Observable.of({});
//
// Observable.zip(auth, sanc).subscribe((data) => {
//     self.authenticate = data[0];
// self.sanctum = data[1];
//
// self.appComponent.loading = false;
// self.complete = true;
// // self.router.navigate(['/application/list']);
// }, (err) => {
//     console.log("Error services");
//     self.appComponent.loading = false;
//     self.alertService.error('Not possible to enable one or more services', err);
// });