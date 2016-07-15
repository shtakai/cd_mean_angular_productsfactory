console.log('start');


function Product (name, price){
  this.name = name || chance.word();
  price = price || 0.00
  this.price = isNaN(new Number(price)) ? new Number(0.00) : new Number(price);
  let _qty = 50;
  this.buy = function(amount){
    if(_qty < amount){
      _qty = 0;
      console.log('cannot be below 0');
    } else {
      _qty -= 1;
    }
  }
  this.getQty = function(){
    return _qty;
  }

}



