'use strict';

var Branch = require('../models/branch.model.js');
var CompanyController = require('./company.controller.js');

exports.create = function (req, res) {
    // Create and Save a new Note
    var newbranch = req.body.data;

    if (!newbranch.name) {
        res.status(400).send({ message: "Branch can not be empty" });
    }
    var companyId = newbranch.companyId;
    var branch = new Branch({ companyId: companyId, name: newbranch.name, branchId: newbranch.branchId });

    branch.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Branch." });
        } else {
            CompanyController.addNewBranchToCompany(companyId, data._id);
            res.send(data);
        }
    });
};
exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    Branch.find(function (err, notes) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving branches." });
        } else {
            res.send(notes);
        }
    });
};
exports.findOne = function (req, res) {
    // Find a single note with a noteId
    Branch.findById(req.params.branchId, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not retrieve branch with id " + req.params.branchId });
        } else {
            res.send(data);
        }
    });
};
exports.getBranchesByCompany = function (req, res) {
    var id = req.params.companyId || req.query.companyId;
    Branch.aggregate([{ $match: {
            companyId: id
        } }], function (err, result) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(result);
            res.send(result);
        }
    });
};
exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    Branch.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete branch with id " + req.params.id });
        } else {
            res.send({ message: "Branch deleted successfully!" });
        }
    });
};