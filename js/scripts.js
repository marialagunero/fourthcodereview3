//business logic for Pizza
//1 constructor
//2 properties of constructor (toppings,size, -?time? )
function Pizza(toppings, size) {
  /*properties*/this.toppings = toppings;
  /*properrties*/this.size = size;
  /*?time?*/this.time = time;

}



//3 toppings(bacon,peppers,etc), size(s,m,l), cost(2 costs),?ticket and disply?
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