// Video 2.6 accompanies this exercise

// We’ve made a significant difference, but there are still too many goldfish
// for the fragile Miami Beach ecosystem. The oceanologists would like you to
// implement the following new plan for population reduction:
//
//  - If the month is a multiple of 4, then find 75% of the goldfish
//    population. Log that value to the console in the format below.
//    Then, remove that value from the total number of goldfish.
//
//  - Otherwise, if the population is above 10000, find half of the goldfish
//    population. Log that value to the console in the format below. Then,
//    remove that value from the total number of goldfish.
//
// Use this format for logging goldfish reduction:
//
//      Removing <number> goldfish from the population.
//
// Use the code below in your soluton.
//
// Note: To complete the challenge, you only need to insert an if statement
// and an else if statement. You do not need to create an else statement at
// the bottom or change any of the provided code.

var numGoldfish = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  <if statement goes here>

  <else if statement goes here>

  numGoldfish *= 4;
  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");
}















// Answer example:
var numGoldfish = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 === 0) {
  	console.log("Removing " + numGoldfish * .75 + " goldfish from the population.");
    numGoldfish *= .25;
  } else if(numGoldfish > 10000) {
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
Removing 192 goldfish from the population.
There will be 256 goldfish after 4 month(s)!
There will be 1024 goldfish after 5 month(s)!
There will be 4096 goldfish after 6 month(s)!
There will be 16384 goldfish after 7 month(s)!
Removing 12288 goldfish from the population.
There will be 16384 goldfish after 8 month(s)!
Removing 8192 goldfish from the population.
There will be 32768 goldfish after 9 month(s)!
Removing 16384 goldfish from the population.
There will be 65536 goldfish after 10 month(s)!
Removing 32768 goldfish from the population.
There will be 131072 goldfish after 11 month(s)!
Removing 98304 goldfish from the population.
There will be 131072 goldfish after 12 month(s)!
