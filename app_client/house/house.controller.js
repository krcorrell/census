(function() {
    
    angular
        .module('censusApp')
        .controller('houseCtrl', houseCtrl);
        
    houseCtrl.$inject = ['$scope', 'PriceData', 'SelectedData'];
    
    function houseCtrl($scope, PriceData, SelectedData) {
        var vm = this;
        console.log(window.location);
        
        vm.content = "House Prices";
        
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
        
        vm.getHousePricesForLocation = function() {
            
            PriceData.getHousePricesForLocation(vm.selectedCity.locations)
                .success(function(data) {
                    vm.HousePrices = data[0];
                    console.log(vm.HousePrices);
                })
                .error(function(e){
                    console.log(e);
                });
        }
        
        console.log("IN HOUSE PRICE BY LOCATION: " + vm.selectedCity.locations);
        vm.getHousePricesForLocation();
    }
    
})();