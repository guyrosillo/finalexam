// Video 1.1 accompanies this exercise

// Off the coast of Miami Beach, a group of oceanologists have
// begun a project that will grow the population of goldfish. Every
// month, the population will multiply by four! To stay on top of this
// explosive growth, the scientists would like a printout of how many
// goldfish will make a new home in Miami Beach water.
//
// Copy the variables below and use them to build a while loop that prints
// a message for one year’s worth of time.

var numGoldfish = 4;
var monthNumber = 1;
var monthsToPrint = 12;

// Here’s what the first two lines of output should look like:
//
//    There will be 16 goldfish after 1 month(s)!
//    There will be 64 goldfish after 2 month(s)!














// Answer example:
var numGoldfish = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while(monthNumber <= monthsToPrint) {

  numGoldfish *= 4;

  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");

  monthNumber++;
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
