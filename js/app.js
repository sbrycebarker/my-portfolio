angular.module("myApp", ['ui.router']).config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
          $stateProvider
          .state('home', {
            url: '/',
            templateUrl: "../stuff/home.html",
            controller: 'ctrl'
          })
          // .state('about', {
          //   url: '/about',
          //   templateUrl: "./views/about.html"
          // })
})

// .filter('startFrom', function() {
//             return function(data, start) {
//               return data.slice(start);
//             }
//           })
