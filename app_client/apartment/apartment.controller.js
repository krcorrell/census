(function() {
    
    angular
        .module('censusApp')
        .controller('apartmentCtrl', apartmentCtrl);
        
    apartmentCtrl.$inject = ['$scope', 'PriceData', 'SelectedData'];
    
    function apartmentCtrl($scope, PriceData, SelectedData) {
        var vm = this;
        console.log(window.location);
        
        vm.content = "Apartment Prices";
        
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
        
        vm.getApartmentPricesForLocation = function() {
            
            PriceData.getApartmentPricesForLocation(vm.selectedCity.locations)
                .success(function(data) {
                    vm.ApartmentPrices = data[0];
                    console.log(vm.ApartmentPrices);
                })
                .error(function(e){
                    console.log(e);
                });
        }
        
        console.log("IN APARTMENT PRICE BY LOCATION: " + vm.selectedCity.locations);
        vm.getApartmentPricesForLocation();
    }
    
})();