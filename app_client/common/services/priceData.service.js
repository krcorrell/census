(function() {

    angular
        .module('censusApp')
        .service('PriceData', priceData);

    priceData.$inject = ['$http'];

    function priceData($http) {
        var getHouseData = function() {
            return $http.get('/api/HousePrices');
        }

        var getHousePricesForLocation = function(locations) {
            return $http.get('/api/HousePrices/' + locations);
        }
        
        var getApartmentPricesForLocation = function(locations) {
            return $http.get('/api/ApartmentPrices/' + locations);
        }
        
        var getDuplexPricesForLocation = function(locations) {
            return $http.get('/api/DuplexPrices/' + locations);
        }        

        return {
            getHouseData: getHouseData(),
            getHousePricesForLocation: getHousePricesForLocation,
            getApartmentPricesForLocation: getApartmentPricesForLocation,
            getDuplexPricesForLocation: getDuplexPricesForLocation
        };
    }
})();
