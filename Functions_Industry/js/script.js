var seniorCitizen = "";

var rate;

var principal="";

var time = 0;

var interest;

function getRateofInterestbyAge(seniorCitizenParam) {
    if(seniorCitizenParam == "y"){
        rate = 15;
    } else if (seniorCitizenParam == "n") {
        rate = 10;
    }
    return rate;
}

function getInterestforPrincipal() {
    interest = principal * time * rate;
    interest = interest / 100;
    return interest;
}

while ((seniorCitizen != "y" || seniorCitizen != "n") && seniorCitizen == "") {
    seniorCitizen = prompt("Are you a senior citizen? Enter 'y' for yes and 'n' for no");
    if ((seniorCitizen != "y" || seniorCitizen != "n") && seniorCitizen == "") {
        alert('Please press enter y or n only.');
    } else if (seniorCitizen == "y" || seniorCitizen == "n") {
        alert('You are eligible for '+getRateofInterestbyAge(seniorCitizen)+'% rate for interest');
    }
}

while ((principal == "" || principal == 0) && !isNaN(principal)) {
    principal = prompt("Please enter the principal for the investment");
}

alert("The principal amount is : " + principal+"$s");

while ((time == "" || time == 0) && !isNaN(time)) {
    time = prompt("Please enter the time for the investment in years - interest will be calculated according to years only");
}

alert("The time of investment is : " + time + " years");

alert("The interest for principal amount of - " + principal + "$s at rate of " + rate + "% for a time period of " + time + " years is " + getInterestforPrincipal()+"$s");