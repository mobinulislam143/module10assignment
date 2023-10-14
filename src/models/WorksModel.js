const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    email:{type:String},
    title:{type:String},
    classNote:{type:String},
    description:{type:String},
    status:{type:String},
}, {timeStamp: true, versionKey: false})

const worksModel = mongoose.model('tasks', DataSchema)
module.exports = worksModel