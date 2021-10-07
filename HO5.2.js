var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, intGradeOption, stringFinalGrade;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    intGradeOption = parseInt($("grade_option").value);
    stringFinalGrade = $("final_grade");
    
    floatTotalPts = floatHwPts + floatMidPts + floatFinPts;
    
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
    
    $("final_grade").value = stringFinalGrade;
    
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};
