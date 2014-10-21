var app = angular.module('amazonApp', ['ngResource', 'ngRoute']);

// app.config(function($routeProvider) {
//   $routeProvider
//     .when("/", {
//       templateUrl: "/templates/home.html",
//       controller: "HomeController"
//     })
//     .when("/profile", {
//       templateUrl: "/templates/profile.html",
//       controller: "ProfileController"
//     })
//     .otherwise({
//       redirectTo: "/profile"
//     });
// });



// app.controller('OrdersController', ['$scope', '$resource',
//   function($scope, $resource) {
//     $scope.order =  {};
//     $scope.order.description; 
//     var Task = $resource('/orders/:id', {id: '@id'});

//   }
// ]);