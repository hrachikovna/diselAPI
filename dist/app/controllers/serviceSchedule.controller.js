"use strict";

var ServiceSchedule = require('../models/serviceSchedule.model.js');

exports.create = function (req, res) {
    // Create and Save a new Note
    if (!req.body.name) {
        res.status(400).send({ message: "Service schedules  can not be empty" });
    }
    var serviceSchedule = new ServiceSchedule({
        categoryItemId: req.body.categoryItemId,
        name: req.body.name,
        description: req.body.description,
        serialNumber: req.body.serialNumber,
        isDel: false
    });

    serviceSchedule.save(function (err, data) {
        console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the service schedules." });
        } else {
            res.send(data);
        }
    });
};
exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    ServiceSchedule.find(function (err, fleets) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving service schedules." });
        } else {
            res.send(fleets);
        }
    });
};
exports.findOne = function (req, res) {
    // Find a single Fleets with a fleetId
    ServiceSchedule.findById(req.params.fleetId, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not retrieve service schedule  with id " + req.params.fleetId });
        } else {
            res.send(data);
        }
    });
};
exports.delete = function (req, res) {
    // Delete a fleet with the specified FleetId in the request
    ServiceSchedule.remove({ _id: req.params.id }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete service schedule with id " + req.params.id });
        } else {
            res.send({ message: "Fleet deleted successfully!" });
        }
    });
};