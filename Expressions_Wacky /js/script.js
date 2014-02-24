// Dao Villar 2/13/14 Expressions Assignment Wacky

//calculate how many bags of marshmallows are needed to cover the rooms in your house
//3 bags of marshmallows cover 1 sq foot of wall space

//collect the width
var width = prompt("We are calculating the number of bags it would take to cover the rooms in your home with marshmallows. \n " + "Please enter the width of the room.");
//collect the length
var length = prompt("Please enter the length of the room.");
//collect the number of rooms to be covered
var rooms = prompt("Please enter the number of rooms you would like to cover.");
//calculate bags of marshmallows needed
var result = (width * length * 3) * rooms;
//publish the result via alert
var result = ("You need " + result + " bags of marshmallows to cover " + rooms + " rooms in your home.");
alert(result);
//publish result via console.log
console.log(result);