app.factory("Cart", ["Item", function(Item) {
  var shoppingCart = {};
  return {
    addToCart: function(item) {
      if(shoppingCart[item.name]) {
        shoppingCart[item.name].count++;
        this.getSubTotal.subTotal += shoppingCart[item.name].price;
      } else {
        shoppingCart[item.name] = {
          item: item,
          count: 1,
          price: item.price
        };
        this.getSubTotal.subTotal += shoppingCart[item.name].price;
      }   
    },
    goCheckOut: function() {
      return shoppingCart;
    },
    getSubTotal: {
      subTotal: 0
    } 
  };
}]);