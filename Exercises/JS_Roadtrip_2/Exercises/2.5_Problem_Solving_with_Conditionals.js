// Video 2.4 accompanies this exercise

// Back at Miami Beach, scientists could see that the goldfish situation would
// quickly get out of control. They have decided that, for any month the
// goldfish population climbs above 10000, half of the goldfish will be sent
// away to other regions. Use the code below in your solution.
//
// Inside of our for loop, insert an if statement that:
//  - Removes half of the goldfish population if the number of goldfish rises
//    above 10,000.
//  - Prints the number of goldfish being removed to the console in the
//    following format: "Remove <number> goldfish from the population"
//
// Note: To complete the challenge, you only need to insert the if statement.
// You do not need to create an else statement or change any of the provided
// code.

var numGoldfish = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  <insert your code here>

  numGoldfish *= 4;
  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");
}















// Answer example:
var numGoldfish = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(numGoldfish > 10000) {
    console.log("Removing " + numGoldfish / 2 + " goldfish from the population.");
    numGoldfish /= 2;
  }

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
Removing 8192 goldfish from the population.
There will be 32768 goldfish after 7 month(s)!
Removing 16384 goldfish from the population.
There will be 65536 goldfish after 8 month(s)!
Removing 32768 goldfish from the population.
There will be 131072 goldfish after 9 month(s)!
Removing 65536 goldfish from the population.
There will be 262144 goldfish after 10 month(s)!
Removing 131072 goldfish from the population.
There will be 524288 goldfish after 11 month(s)!
Removing 262144 goldfish from the population.
There will be 1048576 goldfish after 12 month(s)!
