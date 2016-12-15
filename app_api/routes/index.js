var express = require('express');
var router = express.Router();
var ctrlPricing = require('../controllers/pricing');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* House Prices */
router.get('/HousePrices/:locations', ctrlPricing.HousePricesReadOne);
router.get('/HousePrices', ctrlPricing.HousePricesReadAll);

/* Aparment Prices */
router.get('/ApartmentPrices/:location', ctrlPricing.ApartmentPricesReadOne);

/* Duplex Prices */
router.get('/DuplexPrices/:location', ctrlPricing.DuplexPricesReadOne);

module.exports = router;
