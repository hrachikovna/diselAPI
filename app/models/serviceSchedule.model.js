var mongoose = require('mongoose');

var ServiceScheduleSchema = mongoose.Schema({
    categoryItemId: String,
    name: String,
    description:String,
    serialNumber:String,
    isDel:String,
}, {
    timestamps: true
});

module.exports = mongoose.model('ServiceSchedule', ServiceScheduleSchema);