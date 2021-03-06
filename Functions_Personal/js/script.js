// Dao Villar 2/27/14 Functions Assignment Personal
//Mobile Phone Survey


// mobile os integer value
var mobileOsInt = 0;
// mobile os string value
var mobileOS = "";
// mobile carrier integer value
var mobilecarrierInt = 0;
// mobile carrier string value
var mobilecarrier = "";
// mobile data usage integer value
var mobileUsageInt = "";
// result of application
var result = "Thanks for completing the Mobile survey! You are a " + getMobileDataUsageGreatness() + " internet user. You use " + mobileOS + " and " + mobilecarrier + " is your carrier.";
// returns alert based on mobile os integer value
function getAlertOS(mobileOsIntParam) {
    if (mobileOsIntParam==1) {
        mobileOS = "IPHONE";
    } else if (mobileOsIntParam == 2) {
        mobileOS = "WINDOWS PHONE";
    } else if (mobileOsIntParam == 3) {
        mobileOS = "ANDROID PHONE";
    } else if (mobileOsIntParam == 4) {
        mobileOS = "BLACK BERRY";
    }
    alert('You are a ' + mobileOS + ' user!');
}
// returns alert based on mobile carrier integer value
function getAlertCarrier(mobilecarrierIntParam) {
    if (mobilecarrierIntParam == 1) {
        mobilecarrier = "T-Mobile";
    } else if (mobilecarrierIntParam == 2) {
        mobilecarrier = "AT&T";
    } else if (mobilecarrierIntParam == 3) {
        mobilecarrier = "VERIZON";
    }
    alert('You are a '+mobilecarrier+' user!');
}
// returns amount of mobile usage
function getMobileDataUsageGreatness() {
    if (mobileUsageInt < 1000) {
        return "basic";
    } else if (mobileUsageInt > 1000 && mobileUsageInt < 3000) {
        return "moderate";
    } else if (mobileUsageInt > 3000) {
        return "serious";
    }

}

alert("Welcome to The Mobile Technology Survey!");
// while loop to select the mobile phone
while ((mobileOsInt == "" || mobileOsInt == 0) && !isNaN(mobileOsInt)) {
    mobileOsInt = prompt("Please select the Mobile Phone you use: \n 1 - if you use a IPHONE \n 2 - if you use a WINDOWS PHONE \n 3 - if you use a ANDROID PHONE \n 4 - if you use a BLACK BERRY");
    if (!(1 <= mobileOsInt && mobileOsInt <= 4)) {
        alert("Opps! Please enter a number between 1 and 4.");
        mobileOsInt = 0;
    }
    else {
        getAlertOS(mobileOsInt);
    }
}
// while loop to select the mobile carrier
while ((mobilecarrierInt == "" || mobilecarrierInt == 0) && !isNaN(mobilecarrierInt)) {
    mobilecarrierInt = prompt("Please select your carrier: \n 1 - if you use T-Mobile \n 2 - if you use AT&T \n 3 - if you use VERIZON");
    if (!(1 <= mobilecarrierInt && mobilecarrierInt <= 3)) {
        alert("Opps! Please enter a value with in 1 and 3.");
        mobilecarrierInt = 0;
    }
    else {
        getAlertCarrier(mobilecarrierInt);
    }
}
// while loop to select the mobile data usage
while ((mobileUsageInt == "" || mobileUsageInt == 0) && !isNaN(mobileUsageInt)) {
    mobileUsageInt = prompt("Please enter your data usage in MB's for the month");
    if (isNaN(mobileUsageInt)) {
        alert("Opps! Please enter a numeric value for your data usage.");
        mobileUsageInt = 0;
    }
    else {
        alert("You use " + mobileUsageInt + " MB's of data per month.");
    }
}

alert("Thanks for completing the Mobile Technology Survey! You are a " + getMobileDataUsageGreatness() + " internet user. You use a " + mobileOS + " and " + mobilecarrier + " is your carrier.");

console.log("Result of application is : " + result);
