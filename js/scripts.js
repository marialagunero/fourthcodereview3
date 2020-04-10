//business logic for Pizza
//1 constructor
//2 objects of constructor (toppings,size ?time? )
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;

}



//3 properties toppings(bacon,peppers,etc), size(s,m,l), cost(6,10,14),?ticket and disply?
//4 create prototypes to display "receipt" of pizza made.





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

  })


});