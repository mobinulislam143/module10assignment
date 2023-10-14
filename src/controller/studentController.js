const StudentModel = require('../models/StudentsModel')
const jwt = require('jsonwebtoken')

exports.createStd = async (req, res )=> {
    try{
        let reqBody = req.body
        let result = await StudentModel.create(reqBody)
        res.status(200).json({ status: "success", data: result });
 
    }catch(err) {
        res.status(500).json({ status: "fail", data: err.toString() });
    }
}
exports.stdLogin = async (req, res) => {
    try{
        let reqBody=req.body;
        let result= await StudentModel.find(reqBody).count();
        if(result===1){
            // Create Token
            let payLoad={
                exp:Math.floor(Date.now()/1000)+(24*60*60),
                data: reqBody['email']
            }
            let Token=jwt.sign(payLoad,"myPersonalSecret123");
            res.status(200).json({status:"success", Token: Token, data:result})

        }
        else{
            // Login fail
            res.status(400).json({status:"fail",data:"No User Found"})
        }
    }
    catch (e) {
        res.status(404).json({status:"fail",data:e.toString()})
    }
}

exports.readStd = async(req, res) => {
    try{
        let result = await StudentModel.find()
        res.status(200).json({ status: "success", data: result });
    }catch(err) {
        res.status(500).json({ status: "fail", data: err.toString() });

    }
}
exports.readbyId = async(req, res) => {
    try{
        let id = req.params.id
        let result = await StudentModel.find({_id:id})
        res.status(200).json({ status: "success", data: result });
    }catch(err) {
        res.status(500).json({ status: "fail", data: err.toString() });

    }
}
exports.updatebyId = async(req, res) => {
    try{
        let id = req.params.id;
        let reqBody = req.body
        let result = await StudentModel.updateOne({_id:id}, reqBody)
        res.status(200).json({ status: "success", data: result });
    }catch(err) {
        res.status(500).json({ status: "fail", data: err.toString() });

    }
}
exports.deletebyId = async(req, res) => {
    try{
        let id = req.params.id;
        let reqBody = req.body
        let result = await StudentModel.deleteOne({_id:id})
        res.status(200).json({ status: "success", data: result });
    }catch(err) {
        res.status(500).json({ status: "fail", data: err.toString() });

    }
}
