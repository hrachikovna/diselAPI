var mongoose = require('mongoose');

var JobSchema = mongoose.Schema({
    vehicleId: String,
    companyId: String,
    fleetId:String,
    jobName: String,
    description:String,
    startDate:String,
    estimatedCompletionDate:String,
    endDate:String,
    jobStatus:String,
    isDel:String,
    jobType:String,
    labourCost:String,
    invoiceNumber:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Job', JobSchema);