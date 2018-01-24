var Fleet = require('../models/fleet.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    var newBranch = req.body.data ;
    if(!newBranch.name) {
        res.status(400).send({message: "Fleet can not be empty"});
    }
    var fleet = new Fleet({name: newBranch.name, branchId: newBranch.branchId, companyId:newBranch.companyId, isDel:false});

    fleet.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the fleet."});
        } else {
            res.send(data);
        }
    });

};
exports.findByCompanyID = function ( req, res ) {
    Fleet.aggregate([
        { $match: {
            companyId: req.params.companyId
        }}
    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }else{
            res.send(result);
        }

    });
}
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

exports.findByBranchID = function (req, res ) {
    Fleet.aggregate([
            { $match: {
                branchId: req.params.branchId
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