(function() {

  angular
    .module('censusApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedState : '',
          selectedCounty : '',
          selectedCity : ''
      };
  }

})();