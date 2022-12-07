const assignModel = require("../model/assignModel");
let defaultImg = "./profileHold.png"



// get:
const allGet = async (req, res) =>{
    try {
        const getAll = await assignModel.find();
        res.status(200).json({
            message: "all data successfully gotten",
            data: getAll
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error.message
        })
    }
};

// Post:
const addUp = async (req, res) =>{
    try {
        const {Name, Bio} = req.body;
        const postDetails = await assignModel.create({
            Name, 
            Bio: Bio ? Bio : "Hello, Welcome to our Platform",
            Image: req.file ? req.file.path : defaultImg,
        })
        res.status(201).json({
            message: "successfully uploaded",
            data: postDetails
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occured",
            data: error
        })
    }
};

module.exports = {allGet, addUp}