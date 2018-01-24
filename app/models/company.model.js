var mongoose = require('mongoose');

var CompanySchema = mongoose.Schema({
    name: String,
    //image:String,
    phoneNumber:String,
    address:String,
    website:String,
    branches:Array,
    companyAgent:String,
    companyEmail:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);