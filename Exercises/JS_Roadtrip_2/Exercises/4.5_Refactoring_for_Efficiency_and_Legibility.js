// Video 4.1 accompanies this exercise

// In the code below, refactor the code inside the function to include only
// one line that returns a value. Then test your new function to make sure it
// returns the same values as the old function.

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}













// Answer example:
function mystery(x, y) {
  return (4 * x * y) + (3 * y + 5);
}

mystery(2, 6);

// Output:
71
