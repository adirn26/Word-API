const mongoose = require("mongoose")

const Words = new mongoose.Schema({
    wordName: {
        type: String,
        required: true,
        unique: true
    }, 
    wordMeaning: {
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model("Words", Words);