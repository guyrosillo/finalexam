//Question 1.3
//Find the error in the following code:
var x = 15;
if (x > 10){
   console.log(x is greater than ten);
}

//Question 1.4
//Find the error in the following code:
var y = 27;
if y === 27
  console.log(27);

//Question 2.3
//What is the value of x?
//Hint: Remember PEMDAS (parenthesis, exponent, mult, div, add, sub)
var a = "thug life"
var b = 5;
var c = 10;
var x = b*c + a;

//Question 2.4
//What is the value of x?
var x = 10;
var y = 6;
x = x*y;
var z = 4;
x = x*z;


//Question 3.3
//What is the value of str3?

var str1 = "que bola acere";
var str2 = "sup dawg";
var str3 = str1+"is similar to"+str2+" in spanish.";


//Question 3.4
//Use console.log to output the statement: "Hi! My name is Slim Shady." using the following two variables:
var greeting = "Hi!";
var name = "Slim Shady";


//Question 4
/*
Given three variables, money, interest, and years, write a program that displays (using console.log) the amount of money that you have after collecting the interest payments due at the end of each year. For example, if you start with $100 and the interest is 10%, then your program should output the following:
"At the end of year 1, you have $110"
"At the end of year 2, you have $121"
"At the end of year 3, you have $131.1"
...
"At the end of year [n], you have $[amount from previous year]*(1+interest)
----
Dadas tres variables, money, interest, and years, escriba un programa que muestre (utilizando console.log) la cantidad de dinero que usted tendria luego de recibir el pago de interes al final del an~o. Poe ejemplo, si usted comienza con cien dolares y la tasa de interes For example, if you start with $100 and the interest is 10%, then your program should output the following:
"Al terminar el an~o 1, usted tiene $110"
"Al terminar el an~o 2, usted tendra $121"
"Al terminar el an~o 3, usted tendra $131.1"
...
"Al terminar el an~o [n], usted tendra $[monto anterior]*(1+interes)
"
*/
var money = 1000;
var interest = 0.05;
var years = 30;

//Extra credit
//given three variables, create a program that outputs (to the console) "You should buy a new car" only if the current car age is greater than 10, the mileage is greater than 150,000 and the brand is Kia. Otherwise, your program should output "Hold off a bit, be frugal."
var carAge = 10;
var mileage = 150000;
var brand = "Kia";

if (         ){
  console.log("You should buy a new car");
}
else{
  console.log("Hold off a bit, be frugal.");
}


//Question 1.1
//Find the error in the following for loop:

// for (var i = 0; i < '5'; i++;) {
//   console.log('i')
// }
//

//Question 1.2
//Find the error in the following conditional:
// if false{
//   consola.log("hello")
// }else{
//   console.log("hasta luego")
// }

//Question 2.1
//What does will the console output when the following is entered.
// '1'+1
//a. 2
//b. "2"
//c. "11"
//d. 11

//Question 2.2
//Find the errors in the following
var name = "Roberto"
var time =3
// name"+ said "He's comming late.", the meetin is still at " + time +


//Question 3.1
//Write a sentence that uses the following variables
var firstName = "John"
var lastName = "Martinez"
var city = "Miami"


//Question 3.2
//Write a sentence that uses the following variables
totalPower = 32
generator = 1


//Question 5.2
//Usted trbaja para un parque de agua. En esta parque hay 7 piscinas pequenas y 5 grandes.
//El ingeniero le reporta todo los dias de cuales piscinas estan trabajando.
//La contadora le preguntu que le haga un report de cuanto galones gasta por dia,
//que depende en las piscinas operacionales.  Hoy toda las piscinas estan trbajando.

var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for (currentPool; currentPool< totalPools; currentPool++) {
  if(currentPool <= 7){
    totalVolume += smallVolume
    console.log("Pool #" + currentPool +  " is on and has been filled with " +totalVolume +" gallons." )
  } else{
    totalVolume += largeVolume
    console.log("Pool #" + currentPool +  " is on and has been filled with " +totalVolume +" gallons." )
  }
}

// Extra Credit
// Este dia la picina numero 2 10 no trabajan,

for (currentPool; currentPool<= totalPools; currentPool++) {
  if(currentPool <= 7){
    if(currentPool == 2){
      console.log("Pool #" + currentPool +  "is not open today"  )
    } else{
      totalVolume += smallVolume
      console.log("Pool #" + currentPool +  " is on and has been filled with" +totalVolume  )
    }

  } else{
    if(currentPool == 10){
      console.log("Pool #" + currentPool +  " is not open today" )
    }else{
      totalVolume += largeVolume
      console.log("Pool #" + currentPool +  " is on and has been filled with" +totalVolume  )
    }

  }
}

for (currentPool; currentPool<= totalPools; currentPool++){
  if(currentPool <= 7 && currentPool==2){
    console.log("Pool #" + currentPool +  " is not open today"  )
  }
  else if(currentPool <= 7){
    totalVolume += smallVolume
    console.log("Pool #" + currentPool +  " is on and has been filled with" +totalVolume  )
  } else if(currentPool == 10){
    console.log("Pool #" + currentPool +  " is not open today" )
  } else {
      totalVolume += largeVolume
      console.log("Pool #" + currentPool +  " is on and has been filled with" +totalVolume  )
  }

}



//Extra Credit
//El ingeniero sabe que manana la 2, 6, y 10 no van a trbajar.
//Ademas, la picina numero 12 la van a llenar con la mitad del volumen, para ninos pequenos.
//Adelantese y haga el reporta hoy, para que manana descanse
