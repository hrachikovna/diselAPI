var mongoose = require('mongoose');
var EquipmentSheetItemSchema = mongoose.Schema({
    vehicleId: String,
    daysOnRoad:String,
    reportsMissed:String,
    defectRecorded:String,
    defectDescription:String,
    faultReportCode:String,
    equipmentSheetId:String,
    isDel:Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('EquipmentSheetItem', EquipmentSheetItemSchema);