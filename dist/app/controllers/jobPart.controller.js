"use strict";

var JobPart = require('../models/jobPart.model.js');

exports.create = function (req, res) {
    // Create and Save a new Note
    if (!req.body.data.jobName) {
        res.status(400).send({ message: "Job can not be empty" });
    }
    var newJobPart = req.body.data;
    var jobPart = new JobPart({
        jobId: newJobPart.jobId,
        name: newJobPart.name,
        description: newJobPart.description,
        categoryItemId: newJobPart.categoryItemId,
        partId: newJobPart.partId,
        partCost: newJobPart.partCost,
        serialNumber: newJobPart.serialNumber,
        isDel: false
    });

    jobPart.save(function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Job Part." });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    JobPart.find(function (err, parts) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving jobs part." });
        } else {
            res.send(parts);
        }
    });
};
exports.findOne = function (req, res) {
    // Find a single note with a noteId
    JobPart.findById(req.params.jobId, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not retrieve job with id " + req.params.jobId });
        } else {
            res.send(data);
        }
    });
};
exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    JobPart.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete job with id " + req.params.id });
        } else {
            res.send({ message: "Job deleted successfully!" });
        }
    });
};