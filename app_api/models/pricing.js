var mongoose = require('mongoose');

var HouseSchema = new mongoose.Schema({
    city: String,
    lowend: Number,
    midlevel: Number,
    highend: Number
});

mongoose.model('HousePrices', HouseSchema, 'HousePrices');

var ApartmentSchema = new mongoose.Schema({
    city: String,
    lowend: Number,
    midlevel: Number,
    highend: Number
});

mongoose.model('AparmentPrices', ApartmentSchema, 'AparmentPrices');

var DuplexSchema = new mongoose.Schema({
    city: String,
    lowend: Number,
    midlevel: Number,
    highend: Number
});

mongoose.model('DuplexPrices', DuplexSchema, 'DuplexPrices');