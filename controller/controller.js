const Words = require("../models/Words.js")

exports.addWord = async (req, res) => {
    try {
        const newWord = new Words({
            wordName: req.body.wordName,
            wordMeaning: req.body.wordMeaning
        })
        const savedWord = await newWord.save()
        res.status(200).json(savedWord)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getWords = async (req, res) => {
    try {
        const words = await Words.find()
        res.status(200).json(words)
    } catch (err) {
        res.status(500).json(err)
    }
}
