var Job = require('../models/job.model.js');

exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.data.jobName) {
        res.status(400).send({message: "Job can not be empty"});
    }
    var newJob = req.body.data;
    var job = new Job({
        vehicleId: newJob.vehicleId,
        fleetId:newJob.fleetId,
        companyId: newJob.companyId,
        jobName: newJob.jobName,
        description: newJob.description,
        startDate: newJob.startDate,
        estimatedCompletionDate: newJob.estimatedCompletionDate,
        endDate: newJob.endDate,
        jobStatus: 'new',
        isDel: false,
        jobType: newJob.jobType,
        labourCost: newJob.labourCost,
        invoiceNumber: newJob.invoiceNumber

    });

    job.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Job."});
        } else {
            res.send(data);
        }
    });

};
exports.getJobsByCompanyId = function (req, res) {
    Job.aggregate([
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
    Job.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving jobs."});
        } else {
            res.send(notes);
        }
    });
};
exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Jobb.findById(req.params.jobId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve job with id " + req.params.jobId});
        } else {
            res.send(data);
        }
    });

};
exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Job.remove({_id: req.params.id}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete job with id " + req.params.id});
        } else {
            res.send({message: "Job deleted successfully!"})
        }
    });
};