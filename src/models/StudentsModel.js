const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
    
email : {type: String, unique: true},
firstName : {type: String},
lastName : {type: String},
mobile : {type: String},
password : {type: String},
address : {type: String},
roll : {type: String},
class : {type: String},
}, {versionKey: false, timeStamp: true})

const studentModel = mongoose.model('stds', DataSchema)
module.exports = studentModel
