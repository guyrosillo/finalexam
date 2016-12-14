// Video 4.1 accompanies this exercise

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value. Be careful to think about the possibility of
// equality as well and return one of the numbers. Then test your function
// by calling it with two different numbers and again with two equal numbers.
















// Answer example:
function maxOf2(num1, num2) {
  if(num1 > num2) {
  	return num1;
  } else if (num2 > num1) {
  	return num2;
  } else {
  	return num1;
  }
}

maxOf2(2, 3);
maxOf2(2, 2);

// Another answer example:
function maxOf2(num1, num2) {
  return Math.max(num1, num2);
}

maxOf2(2, 3);
maxOf2(2, 2);

// Output:
3
2
