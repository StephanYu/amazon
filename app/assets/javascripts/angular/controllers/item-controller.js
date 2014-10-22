app.controller('ItemsController', ['$scope', '$resource', '$location', 'Item', 'Cart',
  function($scope, $resource, $location, Item, Cart) {
    $scope.items =  Item.query();
    $scope.allItems = true;
    var item = this;
    
    $scope.addItem = function(item) {
      if(item.quantity > 0) {
        item.quantity --;
        Cart.addToCart(item);
      }
    };
    
  }
]);