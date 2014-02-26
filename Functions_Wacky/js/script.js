// Dao Villar 2/25/14 Functions Assignment Wacky
// Pizza Buddy ordering system

// array for storing pizza base types
var pizzabase = new Array("thin crust", "stuffed crust", "deep dish", "whole wheat");
// pizza base integer value
var pizzabaseint = 0;
// selected pizza base string value
var selectedpizzabase = "";
// array for storing pizza base types
var pizzasize = new Array("regular", "medium", "large");
// pizza size integer value
var pizzasizeint = 0;
// selected pizza size string value
var selectedpizzasize = "";
// array for storing pizza topping types
var pizzatoppings = new Array("Salami", "Pepperoni", "Bacon", "Ham", "Onion", "Green Peppers", "Tomato", "Olives", "Jalapeno", "Mushroom");
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
    pizzabaseint = prompt("Please enter: \n 1 - for Thin Crust pizza \n 2 - for Stuffed Crust pizza \n 3 - for Deep Dish \n 4 - for Whole Wheat pizza");
    if (!(1 <= pizzabaseint && pizzabaseint <= 4)) {
        alert("Opps! Please enter a value between 1 and 4.");
        pizzabaseint = 0;
    }
    else {
        getAlertValue(pizzabase, pizzabaseint,"basetype");
    }
}
// while loop to select the pizza size type
while ((pizzasizeint == "" || pizzasizeint == 0) && !isNaN(pizzasizeint)) {
    pizzasizeint = prompt("Please enter: \n 1 - for Regular pizza \n 2 - for Medium pizza \n 3 - for Large pizza");
    if (!(1 <= pizzasizeint && pizzasizeint <= 4)) {
        alert("Opps! Please enter a value between 1 and 3.");
        pizzasizeint = 0;
    }
    else {
        getAlertValue(pizzasize, pizzasizeint, "basesize");
    }
}
// while loop to select the pizza topping type
while ((pizzatoppingint == "" || pizzatoppingint == 0) && !isNaN(pizzatoppingint)) {
    pizzatoppingint = prompt("Please enter: \n 1 - for Salami \n 2 - for Pepperoni \n 3 - for Bacon \n 4 - for Ham \n 5 - for Onion \n 6 - for Green Peppers \n 7 - for Tomato \n 8 - for Olives \n 9 - for Jalapeno \n 10 - for Mushrooms ");
    if (!(1 <= pizzatoppingint && pizzatoppingint <= 10)) {
        alert("Opps! Please enter a value between 1 and 10.");
        pizzatoppingint = 0;
    }
    else {
        getAlertValue(pizzatoppings, pizzatoppingint, "basetopping");
    }
}

// final alert
alert("Thanks for ordering a " + selectedpizzasize + " " + selectedpizzatopping + " pizza with a " + selectedpizzabase + " base. We hope you order again soon!");

console.log("Result of application is : " + result);
