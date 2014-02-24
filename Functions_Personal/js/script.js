// Functions Personal Assignment

var pizzabase = new Array("thin crust", "cheese burst", "fresh pan", "whole wheat");
var pizzabaseint = 0;
var selectedpizzabase = "";
var pizzasize = new Array("regular", "medium", "large");
var pizzasizeint = 0;
var selectedpizzasize = "";
var pizzatoppings = new Array("chicken salami", "mutton balls", "pork", "capsicum", "onion", "corns", "tomato", "olives", "jalapeno", "mushroom");
var pizzatoppingint = 0;
var selectedpizzatopping = "";

function getAlertValue(arrayparam, value, selectiontype) {
    if (selectiontype == "basetype") {
        selectedpizzabase = arrayparam[value - 1];
        return alert("You choose " + selectedpizzabase + " pizza.");
    } else if (selectiontype == "basesize") {
        selectedpizzasize = arrayparam[value - 1];
        return alert("You choose " + selectedpizzasize + " pizza.");
    } else if (selectiontype == "basetopping") {
        selectedpizzatopping = arrayparam[value - 1];
        return alert("You choose " + selectedpizzatopping + " topping for the pizza.");
    }

}

alert("Welcome to pitzzabuddy.");

while ((pizzabaseint == "" || pizzabaseint == 0) && !isNaN(pizzabaseint)) {
    pizzabaseint = prompt("Please enter \n 1 - for thin crust pizza \n 2 - for cheese burst pizza \n 3 - for fresh pan pizza \n 4 - for whole wheat pizza");
    if (!(1 <= pizzabaseint && pizzabaseint <= 4)) {
        alert("Please enter a value with in 1 and 4 only");
        pizzabaseint = 0;
    }
    else {
        getAlertValue(pizzabase, pizzabaseint,"basetype");
    }
}

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

while ((pizzatoppingint == "" || pizzatoppingint == 0) && !isNaN(pizzatoppingint)) {
    pizzatoppingint = prompt("Please enter \n 1 - for chicken salami pizza \n 2 - for mutton balls pizza \n 3 - for pork pizza \n 4 - for capsicum pizza \n 5 - for onion pizza \n 6 - for onion pizza \n 7 - for tomato pizza \n 8 - for olives pizza \n 9 - for jalapeno pizza \n 10 - for mushroom pizza");
    if (!(1 <= pizzatoppingint && pizzatoppingint <= 10)) {
        alert("Please enter a value with in 1 and 10 only");
        pizzatoppingint = 0;
    }
    else {
        getAlertValue(pizzatoppings, pizzatoppingint, "basetopping");
    }
}


alert("Thanks for ordering a " + selectedpizzasize + " " + selectedpizzatopping + " pizza with " + selectedpizzabase+" base.");
