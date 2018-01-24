'use strict';

var mongoose = require('mongoose');

var BranchSchema = mongoose.Schema({
    name: String,
    companyId: String,
    isDel: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Branch', BranchSchema);