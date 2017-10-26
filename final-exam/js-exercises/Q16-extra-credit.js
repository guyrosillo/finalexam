// Question 16 - Extra Credit

// Repeat question 15, but assume pools 2 and 10 aren't operational.

// Repita la pregunta 15, pero considere que las agrupaciones 2 y 10 no están operativas.
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for (currentPool = 1; currentPool <= 12; currentPool ++) {
    if(currentPool == 2){
    totalVolume = (totalVolume - smallVolume);
    }
    else if(currentPool <=7)
    totalVolume = (1000 * currentPool);
    else if(currentPool == 10){
    totalVolume = (totalVolume - largeVolume)
    }
    else{
    totalVolume = (3000 * currentPool);    
    }
}
console.log(totalVolume);