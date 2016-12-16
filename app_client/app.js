(function (){
    
    angular.module('censusApp', ['ngRoute']);
    function config ($routeProvider){
        
        console.log("TEST");
        
        $routeProvider
          .when('/', {
            templateUrl: '/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
          })
          .when('/population/', {
            templateUrl: '/population/population.view.html',
            controller: 'populationCtrl',
            controllerAs: 'vm'
          })
          .when('/apartment/', {
            templateUrl: '/apartment/apartment.view.html',
            controller: 'apartmentCtrl',
            controllerAs: 'vm'
          })
          .when('/duplex', {
            templateUrl: '/duplex/duplex.view.html',
            controller: 'duplexCtrl',
            controllerAs: 'vm'
          })
          .when('/house/', {
            templateUrl: '/house/house.view.html',
            controller: 'houseCtrl',
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