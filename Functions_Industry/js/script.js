// Dao Villar 2/25/14 Functions Assignment Industry
// Senior investment return calculator


// variable seniorCitizen of string type for user if the user is senior citizen or not - it has to be y or n
var seniorCitizen = "";
// rate of interest for the principal in integer
var rate;
// principal amount of the investment
var principal="";
// time for principal amount in years
var time = 0;
// interest on the principal for given years
var interest;
// result of application
var result = "The interest on the principal amount of " + principal + "$ at rate of " + rate + "% for a period of " + time + " years is " + getInterestforPrincipal() + "$.";
// function getRateofInterestbyAge - accepts seniorCitizenParam(y/n) and returns rate (15 for y, 10 for n)
function getRateofInterestbyAge(seniorCitizenParam) {
    if(seniorCitizenParam == "y"){
        rate = 15;
    } else if (seniorCitizenParam == "n") {
        rate = 10;
    }
    return rate;
}
// calculates and returns interest
function getInterestforPrincipal() {
    interest = principal * time * rate;
    interest = interest / 100;
    return interest;
}
// while loop for prompting and setting value of seniorCitizen
while ((seniorCitizen != "y" || seniorCitizen != "n") && seniorCitizen == "") {
    seniorCitizen = prompt("Are you a senior citizen? Enter 'y' for yes and 'n' for no");
    if ((seniorCitizen != "y" || seniorCitizen != "n") && seniorCitizen == "") {
        alert('Please enter y or n only.');
    } else if (seniorCitizen == "y" || seniorCitizen == "n") {
        alert('You are eligible for a '+getRateofInterestbyAge(seniorCitizen)+'% interest rate on your investments.');
    }
}
// while loop for prompting and setting value of principal
while ((principal == "" || principal == 0) && !isNaN(principal)) {
    principal = prompt("Please enter the principal for your investment.");
}

alert("The principal amount on your investment is: " + principal+"$");
// while loop for prompting and setting value of time
while ((time == "" || time == 0) && !isNaN(time)) {
    time = prompt("Please enter the number of years you will be investing (interest will be calculated in years only).");
}

alert("You will be investing for " + time + " years.");

alert("The interest on the principal amount of " + principal + "$ at rate of " + rate + "% for a period of " + time + " years is " + getInterestforPrincipal() + "$.");

console.log("Result of application is : " + result);