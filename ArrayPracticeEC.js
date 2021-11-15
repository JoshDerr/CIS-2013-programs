//Task 1

var arrayNames = new Array("John", "Robert", "Jimmy", "Bonzo");

var arrayInstruments = [];
arrayInstruments[0] = "Bass";
arrayInstruments[1] = "Vocals";
arrayInstruments[2] = "Guitar";
arrayInstruments[3] = "Drums";

var stringMessage = "";

var i;

for (i = 0; i < arrayNames.length; i++) {
    stringMessage += arrayNames[i] + " plays " + arrayInstruments[i] + "\n";
}

alert(stringMessage);

//task 2

var stringTimesTable = "";

for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
        stringTimesTable = stringTimesTable + " " + (i * j);
    }
    stringTimesTable = stringTimesTable + "\n";
}

alert(stringTimesTable);

//task 3

var stringEvenTimes = "";
var arrayTimesTable = [];
var a, b, k, l;

for (k = 1; k <= 12; k++) {
    arrayTimesTable[k] = [];
    
    for (l = 1; l <= 12; l++) {
        arrayTimesTable[k][l] = k * l;
    }
}

for (a = 1; a <= 12; a++) {
    if (a % 2 === 0) {
        for (b = 1; b <= 12; b++) {
            stringEvenTimes = stringEvenTimes + " " + arrayTimesTable[a][b] + " ";
        }
        stringEvenTimes += "\n";
    }
}

alert(stringEvenTimes);