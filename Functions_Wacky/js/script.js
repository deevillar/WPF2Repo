// Dao Villar 2/25/14 Functions Assignment Wacky
// Pizza Buddy ordering system

// array for storing pizza base types
var pizzabase = new Array("Thin Crust", "Stuffed Crust", "Pan Pizza", "Whole Wheat");
// pizza base integer value
var pizzabaseint = 0;
// selected pizza base string value
var selectedpizzabase = "";
// array for storing pizza base types
var pizzasize = new Array("Regular", "Medium", "Large");
// pizza size integer value
var pizzasizeint = 0;
// selected pizza size string value
var selectedpizzasize = "";
// array for storing pizza topping types
var pizzatoppings = new Array("salami", "pepperoni", "bacon", "ham", "onion", "green peppers", "tomato", "olives", "jalapeno", "mushroom");
// pizza topping integer value
var pizzatoppingint = 0;
// selected pizza topping string value
var selectedpizzatopping = "";
// result of application
var result = "Thanks for ordering a " + selectedpizzasize + " " + selectedpizzatopping + " pizza with " + selectedpizzabase + " base.";
// returns alert for a selection based on array, value entered by user and selection type(size, type, topping)
function getAlertValue(arrayparam, value, selectiontype) {
    if (selectiontype == "basetype") {
        selectedpizzabase = arrayparam[value - 1];
        return alert("You choose a " + selectedpizzabase + " pizza.");
    } else if (selectiontype == "basesize") {
        selectedpizzasize = arrayparam[value - 1];
        return alert("You choose a " + selectedpizzasize + " pizza.");
    } else if (selectiontype == "basetopping") {
        selectedpizzatopping = arrayparam[value - 1];
        return alert("You choose the " + selectedpizzatopping + " topping for your pizza.");
    }

}

alert("Welcome to Pizza Buddy!");
// while loop to select the pizza base type
while ((pizzabaseint == "" || pizzabaseint == 0) && !isNaN(pizzabaseint)) {
    pizzabaseint = prompt("Please enter \n 1 - for thin crust pizza \n 2 - for stuffed crust pizza \n 3 - for pan pizza \n 4 - for whole wheat pizza");
    if (!(1 <= pizzabaseint && pizzabaseint <= 4)) {
        alert("Please enter a value with in 1 and 4 only");
        pizzabaseint = 0;
    }
    else {
        getAlertValue(pizzabase, pizzabaseint,"basetype");
    }
}
// while loop to select the pizza size type
while ((pizzasizeint == "" || pizzasizeint == 0) && !isNaN(pizzasizeint)) {
    pizzasizeint = prompt("Please enter \n 1 - for regular pizza \n 2 - for medium pizza \n 3 - for large pizza");
    if (!(1 <= pizzasizeint && pizzasizeint <= 4)) {
        alert("Please enter a value with in 1 and 3 only");
        pizzasizeint = 0;
    }
    else {
        getAlertValue(pizzasize, pizzasizeint, "basesize");
    }
}
// while loop to select the pizza topping type
while ((pizzatoppingint == "" || pizzatoppingint == 0) && !isNaN(pizzatoppingint)) {
    pizzatoppingint = prompt("Please enter \n 1 - for salami pizza \n 2 - for pepperoni pizza \n 3 - for bacon pizza \n 4 - for ham pizza \n 5 - for onion pizza \n 6 - for green peppers pizza \n 7 - for tomato pizza \n 8 - for olives pizza \n 9 - for jalapeno pizza \n 10 - for mushroom pizza");
    if (!(1 <= pizzatoppingint && pizzatoppingint <= 10)) {
        alert("Please enter a value with in 1 and 10 only");
        pizzatoppingint = 0;
    }
    else {
        getAlertValue(pizzatoppings, pizzatoppingint, "basetopping");
    }
}

// final alert
alert("Thanks for ordering a " + selectedpizzasize + " " + selectedpizzatopping + " pizza with " + selectedpizzabase + " base.");

console.log("Result of application is : " + result);
