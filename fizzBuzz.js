var $ = function (id) 
{
    return document.getElementById(id);
}

doStuffComputer = function()
{
	
	var output = "";
    
    //insert code below    
    
    for (i = 1; i <= 100; i++) {
        if (i % 15 === 0){
            output = "FizzBuzz";
        }
        else if (i % 3 === 0) {
            output = "Fizz";
        }
        else if (i % 5 === 0) {
            output = "Buzz";
        }
        else {
            alert(i);
        }
        
        alert(output);
        
    }
	
}



window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
}