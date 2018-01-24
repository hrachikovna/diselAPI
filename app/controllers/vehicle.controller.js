var Vehcile = require('../models/vehicle.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.data.branchId ) {
        res.status(400).send({message: "Vehicle can not have empty field, please check your form."});
    }
    var data = req.body.data;
    var vehcile = new Vehcile({
        name:data.name,
        companyId:data.companyId,
        branchId:data.branchId,
        fleetId:data.fleetId,
        serviceSchenduleId: data.serviceSchenduleId,
        categoryItemId:data.categoryItemId,
        currentOdometer:data.currentOdometer,
        registrationPlates:data.registrationPlates,
        registrationExpiry:data.registrationExpiry,
        fleetSerialNumber:data.fleetSerialNumber,
        vin:data.vin,
        engineNUmber:data.engineNUmber,
        make:data.make,
        model:data.model,
        description:data.description,
        year:data.year,
        weightKg:data.weightKg,
        fuelFilter:data.fuelFilter,
        oilFilter:data.oilFilter,
        fanBelt:data.fanBelt,
        isDel: false,
    });

    vehcile.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the vehicle."});
        } else {
            res.send(data);
        }
    });

};
exports.findByFleetId = function (req, res) {
    Vehcile.aggregate([
        { $match: {
            fleetId: req.params.id
        }}
    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }else{
            res.send(result);
        }

    });
};
exports.findByCompanyId = function(req, res){
    Vehcile.aggregate([
        { $match: {
            companyId: req.params.id
        }}
    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }else{
            res.send(result);
        }

    });
};
exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Vehcile.find(function(err, vehicles){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving vehicles."});
        } else {
            res.send(vehicles);
        }
    });
};
exports.findOne = function(req, res) {
    // Find a single Fleets with a fleetId
    Vehcile.findById(req.params.id, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve vehcile with id " + req.params.id});
        } else {
            res.send(data);
        }
    });

};
exports.delete = function(req, res) {
    // Delete a fleet with the specified FleetId in the request
    Vehcile.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete vehcile with id " + req.params.id});
        } else {
            res.send({message: "Vehcile deleted successfully!"})
        }
    });
};