var mongoose = require('mongoose');

var JobPartSchema = mongoose.Schema({
    jobId: String,
    name: String,
    description:String,
    categoryItemId:String,
    partId:String,
    partCost:String,
    serialNumber:String,
    isDel:String
}, {
    timestamps: true
});

module.exports = mongoose.model('JobPart', JobPartSchema);