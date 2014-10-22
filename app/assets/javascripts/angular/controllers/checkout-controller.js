app.controller('CheckoutController', ['$scope', '$resource', '$location', 'Cart',
  function($scope, $resource, $location, Cart) {
    $scope.checkOut = function() {
      $location.path('/checkout');
    };
    $scope.cart = Cart.goCheckOut();
    $scope.purchase = function() {
      $location.path('/purchase');
    };
    $scope.subTotal = Cart.getSubTotal.subTotal;

  }
]);