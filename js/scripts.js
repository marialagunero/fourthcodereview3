//business logic
//1 constructor Pizza
//2 properties of constructor (toppings,size,time )
function Pizza(toppings, size, time) {
  /*properties*/this.toppings = toppings;
  /*properties*/this.size = size;
  /*properties*/this.time = time;
  /*properties*/this.price = 0;

}

Pizza.prototype.displayPrice = function () {
  if (this.size === 1){
    this.price = 6.00;
  }else if (this.size === 2){
    this.price = 12.00; 
  }else {
    this.price = 14.00;
  }
  if (this.time === 1) {
    this.price = this.price * 0.75;
  }
}

Pizza.prototype.displayPizzaTicket = function () {
//print all var here?//
var toppings = this.toppings;
var size = this.size;
var price = this.price;
var time = this.time;
//concat/join all properties//
$("#showPizza").html("<p> Toppings: " + toppings + "Size: " + size + "Time:" + time + "Price: " + price + "</p>");
$("#showPizza").show();
}


//3 toppings(bacon,peppers,etc), size(s,m,l), cost(3 costs 6, 10, 14),?receipt and display?
//4 create prototypes to display receipt of pizza made.





//UI Logic
$(document).ready(function(){
  $("#pizzaParlour").submit(function(event){
    event.preventDefault();

    var toppings = parseInt($("#toppings").val());
    var size = parseInt($("#size").val());
    var time = parseInt($("#pizzaTime").val());

    var pizza = new Pizza(toppings, size, time);

    console.log(toppings);
    console.log(size);
    console.log(time);
    console.log(pizza);

    //remember to display on html side//
    pizza.displayPrice();
    pizza.displayPizzaTicket();

  });


});