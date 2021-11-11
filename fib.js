//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
}

//Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validates that the user's input, intCount, is a number and is not less than 2 or greater than 100
    
    if (isNaN(intCount) || intCount < 2 || intCount > 100) {
        $("output").value = "";
        alert("Invalid # of fibonacci numbers input");
    }
	
    //given a valid input, the fibonacci sequence generator is entered
    
    else {
        var i = 0;  // sets the first number in the Fibonacci series to 0
        
        var j = 1;  //sets the second number in the Fibonacci series to 1
        
        var k;    //k is calculated by adding i+j and represents the next Fibonacci number
        
        var stringOutput = i + " " + j;//initialize the Fibonacci series output to include the first two numbers
    
        //decrementing intCount by two due to variables i and j already being printed in stringOutput
        
        intCount -= 2;
        
        //fibonacci sequence generator loop
        
        for (intCount; intCount > 0; intCount--) {
            k = i + j; //sets the newest number equal to the first plus the second number
            
            i = j; //sets the first number to be the value of the current second number
            
            j = k; //sets the second number to be the value of k (the previous sum of i + j)
            
            stringOutput = stringOutput + " " + k; //adds the k value to the end of the string sequence
        }
    }
    
    //posts the fibonacci numbers in stringOutput to the html DOM
    
    $("output").value = stringOutput;
    
} 

// Push solution back to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  