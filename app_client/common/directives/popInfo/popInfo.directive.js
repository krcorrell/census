(function () {

  angular
    .module('censusApp')
    .directive('popInfo', popInfo);

  function popInfo () {
    return {
      restrict: 'EA',
      scope: {
        population : '=info',
      },      
      templateUrl: '/common/directives/popInfo/popInfo.template.html'
    };
  }
})();