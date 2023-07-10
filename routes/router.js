const express = require('express');
const { addWord, getWords } = require('../controller/controller');
const router = express.Router();


router.post('/addWord', addWord);
router.get('/getWords', getWords);

module.exports = router;