(function() {
    
    angular
        .module('censusApp')
        .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope', 'SelectedData'];
    
    function homeCtrl($scope, SelectedData) {
        
        var vm = this;
        console.log(window.location);
        
        vm.content = "Real Estate Data";
        
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
    }
    
})();