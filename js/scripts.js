//business logic
//1 constructor Pizza
//2 properties of constructor (toppings,size, -?time? )
function Pizza(toppings, size) {
  /*properties*/this.toppings = toppings;
  /*properties*/this.size = size;
  /*?time?*/this.time = time;
  /*properties*/this.price = 0;

}

Pizza.prototype.displayPrice = function () {
//if statements//
}

Pizza.prototype.displayReceipt = function () {
//print all var here?//
//concat/join all properties//
}


//3 toppings(bacon,peppers,etc), size(s,m,l), cost(2 costs),?receipt and disply?
//4 create prototypes to display receipt of pizza made.





//UI Logic
$(document).ready(function(){
  $("#pizzaParlour").submit(function(event){
    event.preventDefault();

    var toppings = parseInt($("#pizzaToppings").val());
    var size = parseInt($("#pizzaSize").val());
    var time = parseInt($("#pizzaTime").val());

    console.log(toppings);
    console.log(size);
    console.log(time);

    //remember to disply on html side//

  })


});