// Dao Villar 2/20/14 Functions Assignment Wacky


//How many Jelly Beans will fit in a mason jar?
//Ternary used


//collect the ounces in a mason jar
var ounces = prompt("How many Jelly Beans will fit in a large mason jar? \n " + "How many ounces do you think the jar will hold?");
//collect the # of jelly beans in an ounce
var jellybeans = prompt("How many jelly beans do you think are in an ounce?");
//calculate the total in the jar
var total = ounces * jellybeans;
//alert(total);

//Calculate the tru number of jellybeans in a mason jar
//there are 16 ounces in a large mason jar

function calcTotal(){
    var trueOunces = 16
    var trueJellybeans = 25
    var JBTotal = trueOunces * trueJellybeans;
    return (JBTotal);
}



//if you guess correctly Great, otherwide better luck next time
(minJellybeans >= 400) ? alert("Congratulations, you guessed it! \n " + "There are " + minJellybeans +" jellybeans in a large mason jar.") : alert("Better luck next time! \n " + "There are " + minJellybeans +" jellybeans in a large mason jar.");