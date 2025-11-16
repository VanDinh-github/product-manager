const express = require('express');
const router = express.Router();

const controller = require('../../controllers/admin/product.controller')
//- Product route
router.get('/', controller.index);

module.exports = router;