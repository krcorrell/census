(function() {

    angular
        .module('censusApp')
        .controller('populationCtrl', populationCtrl);

    populationCtrl.$inject = ['$scope', 'SelectedData', 'CensusBureau'];

    function populationCtrl($scope, SelectedData, CensusBureau) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Census";

        vm.selectedState = "";
        vm.selectedCounty = "";
        vm.selectedCity = "";

        //check selected Departure
        if (SelectedData.selectedState !== null) {
            vm.selectedState = SelectedData.selectedState;
        }
        
        //check selected Arrival
        if (SelectedData.selectedCounty !== null) {
            vm.selectedCounty = SelectedData.selectedCounty;
        }

        //check selected weight
        if (SelectedData.selectedCity !== null) {
            vm.selectedCity = SelectedData.selectedCity;
        }

        vm.getState = function() {
            
                   

            CensusBureau.getState()
                .success(function(data) {
                    vm.selectedState = data;
                    console.log(vm.selectedState);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        vm.getCounty = function() {
            
            CensusBureau.getCounty()
                .success(function(data) {
                    vm.selectedCounty = data;
                    console.log(vm.selectedCounty);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        vm.getCity = function() {
            
            CensusBureau.getCity()
                .success(function(data) {
                    vm.selectedCity = data;
                    console.log(vm.selectedCity);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getState();
        vm.getCounty();
        vm.getCity();

    }

})();
