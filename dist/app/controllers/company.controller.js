"use strict";

var Company = require('../models/company.model.js');
var companyY = new Company();
exports.create = function (req, res) {
    // Create and Save a new Note
    var companyData = req.body.data;
    if (!companyData.name) {
        res.status(400).send({ message: "Company should have name" });
    }

    var company = new Company({
        name: companyData.name,
        phoneNumber: companyData.phone,
        address: companyData.address,
        website: companyData.website,
        companyAgent: companyData.companyAgent,
        companyEmail: companyData.companyEmail
        //image: req.file.filename
    });
    company.save(function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Note." });
        } else {
            res.status(201).json(company);
            // res.send(data);
        }
    });
};
//TODO add validation , send result back about adding new branch
exports.addNewBranchToCompany = function (companyId, branchId) {
    Company.findOne({ _id: companyId }, function (error, company) {
        if (error) {
            console.log("error");
            //  res.json(error);
        } else if (company == null) {
            console.log("company is null");
            // res.json('No such company!')
        } else {
            company.branches.push(branchId);
            company.save(function (error, data) {
                if (error) {
                    cosole.log(error);
                    //res.json(error);
                } else {
                    console.log(data);
                    // res.json(data);
                }
            });
        }
    });
};

exports.findAll = function (req, res) {
    // Retrieve and return all companies from the database.
    Company.find(function (err, companies) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving notes." });
        } else {
            res.send({
                "success": "success",
                "companies": companies
            });
        }
    });
};
exports.findOne = function (req, res) {
    // Find a single note with a noteId
    Company.findById(req.params.companyId, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not retrieve company with id " + req.params.companyId });
        } else {
            res.send(data);
        }
    });
};
//
// exports.update = function(req, res) {
//     // Update a note identified by the noteId in the request
//     Note.findById(req.params.noteId, function(err, note) {
//         if(err) {
//             res.status(500).send({message: "Could not find a note with id " + req.params.noteId});
//         }
//
//         note.title = req.body.title;
//         note.content = req.body.content;
//
//         note.save(function(err, data){
//             if(err) {
//                 res.status(500).send({message: "Could not update note with id " + req.params.noteId});
//             } else {
//                 res.send(data);
//             }
//         });
//     });
// };
//
exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    Company.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete company with id " + req.params.id });
        } else {
            res.send({ message: "Company deleted successfully!" });
        }
    });
};