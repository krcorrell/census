(function() {

    angular
        .module('censusApp')
        .service('CensusBureau', censusBureau);

    censusBureau.$inject = ['$http', 'KeyStore'];

    function censusBureau($http, KeyStore) {
        var getCensus = function(lat, lon) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //f53f715588d39379ae80bc9bc045c885
                    var censusKey = keys.CENSUS_KEY;
                    return $http.jsonp('http://api.census.gov/data/2010/sf1?key=' + censusKey + '/' +
                        lat + ',' + lon + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
        };

        return {
            getCensus: getCensus
            
        };
    }
    


})();