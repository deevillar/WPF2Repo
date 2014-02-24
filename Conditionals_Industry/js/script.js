// Dao Villar 2/20/14 Conditionals Assignment Industry


//Do you qualify for holiday pay?
//Logical Operator used

//minimum hours needed to qualify
var minHoursWorked = 32;
//minimum pay/hr needed to qualify
var minWagesEarned = 8;

//collect hours worked
var hoursWorked = prompt("Do you qualify for holiday pay? \n " + "How many hours did you work this week?");
//collect pay/hr
var wagesEarned = prompt("How much did you earn per hour?");

//if hours worked is more then the min req and pay/hr is more then the min req you get holiday pay
if(hoursWorked > minHoursWorked && wagesEarned > minWagesEarned){
    alert("Congratulations! You have qualified for holiday pay.");
}else{
    //you don't qualify
    alert("Sorry, but you do not qualify for holiday pay.");
}
