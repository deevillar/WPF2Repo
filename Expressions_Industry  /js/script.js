// Dao Villar 2/13/14 Expressions Assignment Industry


//calculate how many lbs. of shrimp need to be ordered for a dinner party

//collect number of people attending the party
var guests = prompt("We are calculating the pounds of shrimp that need to be ordered for your Dinner Party. \n " + "Please enter the number of guests attending.");
//collect number of shrimp each guest will receive
var shrimp = prompt("Please enter the number of shrimp each guest will be served.");
//collect the number of shrimp per lb. desired
var pound = prompt("Please enter the number of shrimp per pound you would like to purchase.");
//calculate number of lbs needed for the dinner party
var result = guests * shrimp / pound;
//publish the result via alert
var result = ("You need " + result + " pounds of shrimp for the " + guests + " guests at you dinner party.");
alert(result);
//publish result via console.log
console.log(result);
