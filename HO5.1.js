//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter total HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter total Midterm pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter total Final pts (0-35):"));

floatTotalPts = floatHwPts + floatMidPts + floatFinPts;

intGradeOption = parseInt(prompt("If opting for Pass/Fail: enter 1, else: enter 2"));

if (intGradeOption===1){
    if(floatTotalPts >= 80){
        stringFinalGrade = "Pass";
    }
    else{
        stringFinalGrade = "Fail";
    }
}
else{
    if (floatTotalPts <= 100 && floatTotalPts > 89){
        stringFinalGrade = "A";
    }
    else if (floatTotalPts <= 89 && floatTotalPts > 79){
        stringFinalGrade = "B";
    }
    else if (floatTotalPts <= 79 && floatTotalPts > 69){
        stringFinalGrade = "C";
    }
    else if (floatTotalPts <= 69 && floatTotalPts > 59){
        stringFinalGrade = "D";
    }
    else{
        stringFinalGrade = "F";
    }
}

alert("Your final grade is: " + stringFinalGrade);