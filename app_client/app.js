(function (){
    
    angular.module('censusApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);
    
    function config ($routeProvider, $locationProvider){
        
        console.log("TEST");
        
        $routeProvider
          .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
          })
          .otherwise({redirectTo: '/'});
          
          
        $locationProvider.html5Mode(
          {
            enabled: true,
            requiredBase: false,
            rewriteLinks: true
          }
        );
    }
    
    angular
      .module('censusApp')
      .config(['$routeProvider', '$locationProvider', config]);
})();