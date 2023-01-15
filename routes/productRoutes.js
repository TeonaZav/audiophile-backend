const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
const productController = require('../controllers/productController');

router.route('/all').get(productController.getAll);

router.route('/all/:id').get(productController.getProduct);

router.route('/earphones').get(productController.getEarphones);
router.route('/headphones').get(productController.getHeadphones);
router.route('/speakers').get(productController.getSpeakers);

module.exports = router;
