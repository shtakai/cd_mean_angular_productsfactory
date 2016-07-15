
myApp.controller('productsController',[
  '$scope',
  'productFactory',
  function($scope, productFactory){
    console.log('controller start');
    $scope.newProduct = {}

    $scope.index = function(){
      productFactory.index(function (data){
        console.log(data);
        $scope.productList = data;
      })
    }

    $scope.add= function(){
      console.log('C add');
      productFactory.add(
        $scope.newProduct.name, $scope.newProduct.price,
        function(data){
          $scope.productList = data;
        }
      )
      $scope.newProduct = {};
    }

    $scope.delete = function(product){
      console.log('C delete');
      productFactory.delete(
        product,
        function(data){
          $scope.productList = data;
        }
      )
    };
  }
])
