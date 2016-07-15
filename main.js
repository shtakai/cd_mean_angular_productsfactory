console.log('start');

let myApp = angular.module('myApp', []);

function Product (name, price){
  this.name = name || chance.word();
  price = price || 0.00
  this.price = isNaN(new Number(price)) ? new Number(0.00) : new Number(price);

}

myApp.factory('productFactory', function(){
  console.log('factory start');
  let factory = {};
  let productList = [];
  productList.unshift(
    new Product('test', 100.01)
  );
  console.log(productList);

  factory.index = function(callback){
    console.log('invoke index');
    callback(productList);
  }

  factory.add = function(name, price, callback){
    console.log('factory add');
    productList.unshift(
      new Product(name, price)
    )
    callback(productList);
  }

  factory.delete = function(product, callback){
    console.log('F delete')
    _.remove(productList, function(_product){
      return _product == product;
    });
    callback(productList);
  }


  return factory;

})

myApp.controller('productsController',[
  '$scope',
  'productFactory',
  function($scope, productFactory){
    console.log('controller start');
    $scope.newProduct = {}

    productFactory.index(function (data){
      console.log(data);
      $scope.productList = data;
    })

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
