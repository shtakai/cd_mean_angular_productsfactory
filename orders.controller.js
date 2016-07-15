
myApp.controller('ordersController',[
  '$scope',
  'productFactory',
  function($scope, productFactory){
    console.log('o C start');


    console.log('controller start');
    $scope.newProduct = {}


    productFactory.index(function (data){
      console.log(data);
      $scope.productList = data;
    })

    $scope.buy = function(product) {
      console.log('C buy');
      productFactory.buy(product, function (data) {
      })
    }
  }
])
