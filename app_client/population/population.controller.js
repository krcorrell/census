(function() {
    
    angular
        .module('censusApp')
        .controller('populationCtrl', populationCtrl);
        
    populationCtrl.$inject = ['$scope', 'censusBureau', 'SelectedData'];
    
    function populationCtrl($scope, censusBureau, SelectedData) {
        var vm = this;
        console.log(window.location);
        
        vm.content = "Population Information";
        
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
        
        vm.getCensus = function() {
            
            censusBureau.getCensus(vm.selectedCity.locations)
                .success(function(data) {
                    vm.getCensus = data[0];
                    console.log(vm.getCensus);
                })
                .error(function(e){
                    console.log(e);
                });
        }
        
        console.log("IN POPULATION BY LOCATION: " + vm.selectedCity.locations);
        vm.getCensus();
    }
    
})();