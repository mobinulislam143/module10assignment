const worksModel = require("../models/WorksModel");

exports.createWork = async (req, res) => {
  try {
    let reqBody = req.body;
    reqBody.email = req.headers["email"]; // Correct way to access the email header

    let result = await worksModel.create(reqBody);
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "fail", data: err.toString() });
  }
};

exports.readWork = async (req, res) => {
  try {
    let email = req.headers["email"];
    let result = await worksModel.find({ email: email });
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(404).json({ status: "fail", data: err.toString() });
  }
};
exports.updateWorkbyId = async (req, res) => {
  try {
    let id = req.params.id
    let reqBody = req.body
    let result = await worksModel.updateOne({_id:id}, reqBody)
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(404).json({ status: "fail", data: err.toString() });
  }
};
exports.deleteWork = async (req, res) => {
  try {
    let id = req.params.id
    let result = await worksModel.deleteOne({_id:id})
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(404).json({ status: "fail", data: err.toString() });
  }
};
