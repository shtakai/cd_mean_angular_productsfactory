console.log('start');

let myApp = angular.module('myApp', []);

function Product (name, price){
  this.name = name;
  this.price = new Number(price);
}

myApp.factory('productFactory', function(){
  console.log('factory start');
  let factory = {};
  let productList = [];
  productList.unshift(
    new Product('test', 100.01)
  );
  console.log(productList);

  factory.getProductList = function(callback){
    console.log('invoke getProductList');
    callback(productList);
  }


  return factory;

})

myApp.controller('productsController',[
  '$scope',
  'productFactory',
  function($scope, productFactory){
    console.log('controller start');

    productFactory.getProductList(function (data){
      console.log(data);
    })
  }
])
