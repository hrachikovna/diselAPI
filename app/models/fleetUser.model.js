var mongoose = require('mongoose');
var FleetUserSchema = mongoose.Schema({
    userId:String,
    isDel:Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('FleetUser', FleetUserSchema);