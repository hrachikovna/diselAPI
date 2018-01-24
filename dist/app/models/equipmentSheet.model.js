'use strict';

var mongoose = require('mongoose');
var EquipmentSheetSchema = mongoose.Schema({
    branchId: String,
    isDel: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('EquipmentSheet', EquipmentSheetSchema);