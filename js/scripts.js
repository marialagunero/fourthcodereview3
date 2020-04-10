//business logic
//1 constructor Pizza
//2 properties of constructor (toppings,size, -?time? )
function Pizza(toppings, size) {
  /*properties*/this.toppings = toppings;
  /*properties*/this.size = size;
  /*?time?this.time = time;*/
  /*properties*/this.price = 0;

}

Pizza.prototype.displayPrice = function () {
  if (this.size === 1){
    this.price = 6.00;
    alert('hi');
  /*} else if (this.size === 2){
    this.price = 10.00;
  } else {this.price = 14.00;
  }*/
}

Pizza.prototype.displayPizza = function () {
//print all var here?//
var toppings = this.toppings;
var size = this.size;
var price = this.price;
//concat/join all properties//
}


//3 toppings(bacon,peppers,etc), size(s,m,l), cost(3 costs 6, 10, 14),?receipt and disply?
//4 create prototypes to display receipt of pizza made.





//UI Logic
$(document).ready(function(){
  $("#pizzaParlour").submit(function(event){
    event.preventDefault();

    var toppings = parseInt($("#pizzaToppings").val());
    var size = parseInt($("#pizzaSize").val());
    /*var time = parseInt($("#pizzaTime").val());*/

    var pizza = new Pizza(toppings, size);

    console.log(toppings);
    console.log(size);
    //console.log(time);
    console.log(pizza);

    //remember to display on html side//

  })


});