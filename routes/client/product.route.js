const express = require('express');
const router = express.Router();

const controller = require('../../controllers/client/product.controller')

//- Products route
router.get('/', controller.index )


module.exports = router;