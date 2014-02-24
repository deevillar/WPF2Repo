// Dao Villar 2/13/14 Expressions Assignment Personal


//calculate how much bottled water is required for a camping trip

//collect the number of people attending
var people = prompt("We are calculating the amount of bottled water needed for a camping trip. \n " +
    "Please enter the number of people attending.");
//collect the number of bottled water thought to be used
var bottles = prompt("Please enter the number of bottles of water you will drink per day.");
//collect the number of days the trip will last
var days = prompt("Please enter the number of days your trip will last.");
//calculate the result by using people * days * bottles a day
var totalBottles = people * bottles * days ;
//publish the result via alert
var result = ("The number of water bottles needed for your trip is " + totalBottles + ".");
alert(result);
//publish result via console.log
console.log(result);