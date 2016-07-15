
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

  factory.buy = function(product, callback) {
     console.log('F buy');
     let _product = _.find(productList, function(p){
       return p == product;
     });
     _product.buy(1);
     console.log(`buy product ${product} qty remains:${product.getQty()}`);
     callback(productList);
  }


  return factory;

})
