app.controller('ItemsController', ['$scope', '$resource', 'Item',
  function($scope, $resource, Item) {
    $scope.items =  Item.query();
    $scope.allItems = true;

  }
]);