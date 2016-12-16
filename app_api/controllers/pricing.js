var mongoose = require('mongoose');
var HousePrices = mongoose.model('HousePrices');
var AparmentPrices = mongoose.model('AparmentPrices');
var DuplexPrices = mongoose.model('DuplexPrices');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.HousePricesReadAll = function(req, res) {
    console.log("Finding Housing Prices", req);

    HousePrices
        .find({})
        .exec(function(err, HousePrices) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(HousePrices);
            sendJSONresponse(res, 200, HousePrices);
        });
}

module.exports.HousePricesReadOne = function(req, res) {
    console.log('Finding Prices on Housing', req.params);
    if (req.params && req.params.locations) {
        HousePrices
            .find({
                locations: req.params.locations
            })
            .exec(function(err, HousePrices) {
                if (!HousePrices) {
                    sendJSONresponse(res, 404, {
                        "message": "location value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(HousePrices);
                sendJSONresponse(res, 200, HousePrices);
            });
    }
    else {
        console.log('No location specified');
        sendJSONresponse(res, 404, {
            "message": "No location in request"
        });
    }
};

module.exports.ApartmentPricesReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        AparmentPrices
            .find({
                locations: req.params.locations,
            })
            .exec(function(err, ApartmentPrices) {
                if (!ApartmentPrices) {
                    sendJSONresponse(res, 404, {
                        "message": "location not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(ApartmentPrices);
                sendJSONresponse(res, 200, ApartmentPrices);
            });
    }
    else {
        console.log('No location specified');
        sendJSONresponse(res, 404, {
            "message": "No location in request"
        });
    }
};

module.exports.DuplexPricesReadOne = function(req, res) {
    console.log('Finding Duplex Pricing Record', req.params);
    if (req.params && req.params.locations) {
        DuplexPrices
            .find({
                locations: req.params.locations
            })
            .exec(function(err, DuplexPrices) {
                if (!DuplexPrices) {
                    sendJSONresponse(res, 404, {
                        "message": "location not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(DuplexPrices);
                sendJSONresponse(res, 200, DuplexPrices);
            });
    }
    else {
        console.log('No location specified');
        sendJSONresponse(res, 404, {
            "message": "No location in request"
        });
    }
};