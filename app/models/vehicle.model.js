var mongoose = require('mongoose');

var VehicleSchema = mongoose.Schema({
    name: String,
    companyId:String,
    fleetId: String,
    branchId:String,
    serviceSchenduleId: String,
    categoryItemId:String,
    currentOdometer:String,
    lastServiceOdometer:String,
    registrationPlates:String,
    registrationExpiry:String,
    fleetSerialNumber:String,
    vin:String,
    engineNUmber:String,
    make:String,
    model:String,
    description:String,
    year:String,
    weightKg:String,
    fuelFilter:String,
    oilFilter:String,
    fanBelt:String,
    isDel: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Vehicle', VehicleSchema);