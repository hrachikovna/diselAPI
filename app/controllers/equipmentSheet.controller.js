var EquipmentSheetItem = require('../models/equipmentSheetItem.model.js');
var EquipmentSheet = require('../models/equipmentSheet.model.js');

exports.createSheet = function(req, res) {
    // Create and Save a new Note
    if(!req.body.name) {
        res.status(400).send({message: "Fleet can not be empty"});
    }
    var equipmentSheet = new EquipmentSheet({
        branchId: req.body.branchId,
        isDel:false
    });
    equipmentSheet.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the equipment sheet item."});
        } else {
            res.send(data);
        }
    });
};
exports.createSheetItem = function(req, res) {
    // Create and Save a new Note
    if(!req.body.name) {
        res.status(400).send({message: "Equipment can not be empty"});
    }
    var equipmentSheetItem = new EquipmentSheetItem({
        vehicleId: req.data.vehicleId,
        daysOnRoad: req.data.daysOnRoad,
        reportsMissed: req.data.reportsMissed,
        defectRecorded: req.data.defectRecorded,
        defectDescription: req.data.defectDescription,
        faultReportCode: req.data.faultReportCode,
        equipmentSheetId: req.data.equipmentSheetId,
        isDel: false
    });
    equipmentSheetItem.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the equipment sheet item."});
        } else {
            res.send(data);
        }
    });
};
exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Fleet.find(function(err, fleets){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving fleets."});
        } else {
            res.send(fleets);
        }
    });
};
exports.findOne = function(req, res) {
    // Find a single Fleets with a fleetId
    Fleet.findById(req.params.fleetId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve fleet with id " + req.params.fleetId});
        } else {
            res.send(data);
        }
    });

};
exports.delete = function(req, res) {
    // Delete a fleet with the specified FleetId in the request
    Fleet.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete fleet with id " + req.params.id});
        } else {
            res.send({message: "Fleet deleted successfully!"})
        }
    });
};