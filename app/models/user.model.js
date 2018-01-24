
var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    username:String,
    companyId:String,
    email:String,
    isDel:Boolean,
    roleId:String,
    password: String,
    admin: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);