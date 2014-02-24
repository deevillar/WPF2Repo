// Dao Villar 2/20/14 Conditionals Personal Assignment


// How many hours will you spend in the amusement park?
// Else If & Relational Operator used

//collect days on vacation
var daysOnVaca = prompt("We are calculating the time you plan on spending inside of the Disney Parks? \n " + "How many days do you plan to be on vacation?");
//collect the hours they plan on spending in park
var hoursPerDay = prompt("How many hours a day do you plan to spend in the park?");
//calculate total hours
var totalHours = daysOnVaca * hoursPerDay;
//alert(totalHours);

//if total hours are more then 25
if(totalHours > 25){
    //get some sunscreen
    alert("You better stock up on sunscreen! \n " + "You plan to spend " + totalHours + " hours in the park.");
}else if(totalHours == 0){
    //total hours = 0 reenter the info
    alert("Please re-enter your information.");
}else{
    //the number of hours are
    alert("You plan to spend " + totalHours + " hours in the park.");
}


