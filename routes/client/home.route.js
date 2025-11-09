const express = require('express');
const router = express.Router();

const controller = require('../../controllers/client/home.controller')
//- Home route
router.get('/', controller.index);

module.exports = router;