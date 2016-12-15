(function() {
    
    angular
        .module('censusApp')
        .controller('duplexCtrl', duplexCtrl);
        
    duplexCtrl.$inject = ['$scope', 'PriceData', 'SelectedData'];
    
    function duplexCtrl($scope, PriceData, SelectedData) {
        var vm = this;
        console.log(window.location);
        
        vm.content = "Duplex Prices";
        
        vm.selectedState = "";
        vm.selectedCounty = "";
        vm.selectedCity = "";
        
        if(SelectedData.selectedState !== null){
            vm.selectedState = SelectedData.selectedState;
        }
        
        if(SelectedData.selectedCounty !== null){
            vm.selectedCounty = SelectedData.selectedCounty;
        }
        
        if(SelectedData.selectedCity !== null){
            vm.selectedCity = SelectedData.selectedCity;
        }
        
        vm.getDuplexPricesForLocation = function() {
            
            PriceData.getDuplexPricesForLocation(vm.selectedCity.locations)
                .success(function(data) {
                    vm.DuplexPrices = data[0];
                    console.log(vm.DuplexPrices);
                })
                .error(function(e){
                    console.log(e);
                });
        }
        
        console.log("IN DUPLEX PRICE BY LOCATION: " + vm.selectedCity.locations);
        vm.getDuplexPricesForLocation();
    }
    
})();