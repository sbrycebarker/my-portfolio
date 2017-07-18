angular.module("myApp", ['ui.router']).config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.when('', '/');
          $stateProvider
          .state('home', {
            url: '/',
            templateUrl: "../public/views/home.html",
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
