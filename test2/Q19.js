// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value.
//
// IMPORTANT: Make sure your function returns "equal" if the two numbers are equal.
// You might want to use an if/elseif/else statement for this.
//
// Then make 3 console logs calling your maxOf2 function inside each one.
// The first console log should print 5.
// The second console log should print "equal".
// The third console log should print -3.
function maxOf2(a, b){
    if(a > b){
        console.log(a);
    }
    else if(b > a){
        console.log(b);
    }
    else{
        console.log("equal");
    }
}

maxOf2(5,2);
maxOf2(5,5);
maxOf2(-3, -7);