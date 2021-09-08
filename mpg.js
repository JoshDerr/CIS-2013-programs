<script> 
    
    var floatMiles;
    var floatGallons;
    var floatMPG;
    
    //declaration of variables//
    
    floatMiles = parseFloat(prompt("Enter miles driven:"));
    
    //gets miles from user//
    
    floatGallons = parseFloat(prompt("Enter gallons used:"));
    
    //gets gallons from user//
    
    floatMPG = (floatMiles/floatGallons).toFixed(2);
    
    //calculates mpg by dividing miles from gallons and rounding to the hundredths place//
    
    alert("Miles per gallon = " + floatMPG);
    
    //reports mpg value back to user//
    
</script>
