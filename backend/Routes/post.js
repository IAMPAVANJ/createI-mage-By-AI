const express = require('express');
const {generateImage} = require('../OpenaiController/opneaiController')
const router = express.Router();

router.post("/images",generateImage)

module.exports = router;