app.controller('OrdersController', ['$scope', '$resource', 'Order',
  function($scope, $resource, Order) {
    $scope.orders =  Order.query();
    $scope.allOrders = true;

  }
]);