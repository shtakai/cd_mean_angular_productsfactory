console.log('start');

let myApp = angular.module('myApp', []);

myApp.factory('produtFactory', function(){
  console.log('factory start');
  let factory = {};



  return factory;

})

myApp.controller('productsController',[
  '$scope',
  'produtFactory',
  function($scope, produtFactory){
    console.log('controller start');
  }
])
