// Video 1.4 accompanies this exercise

// In the code below, morph the while loop
// into a for loop that uses the same variable names. Remember, you’ll still
// need to declare the starting number of goldfish and the number of months to
// print outside the loop. We’ve given you the starting number of goldfish
// again, as well as the amount of months you’ll need to print out for use in
// the loop parameters.

var numGoldfish = 4;
var monthsToPrint = 12;

while(monthNumber <= monthsToPrint) {

  numGoldfish *= 4;

  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");

  monthNumber++;
}














// Answer example:
var numGoldfish = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  numGoldfish *= 4;

  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");
}

// Output:
There will be 16 goldfish after 1 month(s)!
There will be 64 goldfish after 2 month(s)!
There will be 256 goldfish after 3 month(s)!
There will be 1024 goldfish after 4 month(s)!
There will be 4096 goldfish after 5 month(s)!
There will be 16384 goldfish after 6 month(s)!
There will be 65536 goldfish after 7 month(s)!
There will be 262144 goldfish after 8 month(s)!
There will be 1048576 goldfish after 9 month(s)!
There will be 4194304 goldfish after 10 month(s)!
There will be 16777216 goldfish after 11 month(s)!
There will be 67108864 goldfish after 12 month(s)!
