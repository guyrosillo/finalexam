// Video 2.6 accompanies this exercise

// The people at the Dinger Dam have called you back, and would like a
// program that shows what happens when only the even numbered turbines are
// turned on. And they want it all in just one for loop.
//
// With a set of complex conditional statements inside the loop, construct
// a way to only turn on even numbered turbines. Remember our power output
// situation:
//  - Generators 1 through 4 produce 62 MW
//  - Generators 5 through 19 produce 124 MW
//
// The output should follow this format:
//
//      Generator #1 is off.
//      Generator #2 is on, adding 62 MW, for a total of 62 MW!
//
// We’ve given you some starting variables to use in your build. Within your
// loop, consider the possible scenarios when building your conditions:
//  - The Generator provides 62 MW of power
//  - The Generator provides 124 MW of power
//  - The Generator is off
//
// Use the code below in your solution.

var totalGen = 19;
var totalMW = 0;















// Answer example:
var totalGen = 19;
var totalMW = 0;

for(var i = 1; i <= totalGen; i++) {
  if(i % 2 === 0) {
    if(i <= 4) {
    	totalMW += 62;
      console.log("Generator #" + i + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    } else {
    	totalMW += 124;
      console.log("Generator #" + i + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    }
  } else {
  	console.log("Generator #" + i + " is off.");
  }
}

// Output:
Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!
Generator #3 is off.
Generator #4 is on, adding 62 MW, for a total of 124 MW!
Generator #5 is off.
Generator #6 is on, adding 124 MW, for a total of 248 MW!
Generator #7 is off.
Generator #8 is on, adding 124 MW, for a total of 372 MW!
Generator #9 is off.
Generator #10 is on, adding 124 MW, for a total of 496 MW!
Generator #11 is off.
Generator #12 is on, adding 124 MW, for a total of 620 MW!
Generator #13 is off.
Generator #14 is on, adding 124 MW, for a total of 744 MW!
Generator #15 is off.
Generator #16 is on, adding 124 MW, for a total of 868 MW!
Generator #17 is off.
Generator #18 is on, adding 124 MW, for a total of 992 MW!
Generator #19 is off.
