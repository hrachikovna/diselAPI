'use strict';

var mongoose = require('mongoose');
var FleetSchema = mongoose.Schema({
    name: String,
    companyId: String,
    branchId: String,
    isDel: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Fleet', FleetSchema);