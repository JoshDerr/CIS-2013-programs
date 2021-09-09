var floatAge, floatMonths, intFortnights, intWeeks, floatDays;

//declaration of variables//

floatAge = parseFloat(prompt("Enter your age in years:")).toFixed(2);

//gets users age//

floatDays = (floatAge * 365.25);

//calculates users age in days by multiplying users age in years by amount of days in a year//

floatMonths = (floatAge * 12);

//calculates users age in months by multiplying users age in years by amount of months in a year//

intWeeks = parseInt(floatDays / 7);

//calculates users age in weeks by dividing users age in days by amount of days in a week//

intFortnights = parseInt(floatDays / 14);

//calculates users age in fortnights by dividing users age in days by amount of days in two weeks//

alert("Age in Years = " + floatAge + ", Age in Months = " + floatMonths + ", Age in Fortnights = " + intFortnights + ", Age in Weeks = " + intWeeks + ", and Age in Days = " + floatDays);

//reports age in different units back to user//