// index.js - Lab 8: Anon Functions and Callbacks 
// Author: Sam Fonseca-Vallejo

// Constants

// Functions 

// Array definition and assignment 
function is Even(x){
    return (x % 2 == 0);
}

// test function 
console.log("isEven(3):", isEven(3)); // false
console.log("isEven(6):", isEven(6)); // true
console.log("isEven(89):", isEven(89)); // false
console.log("isEven(76):", isEven(76)); // true
console.log("isEven(42):", isEven(42)); // true

let array = [3, 6 ,89 ,76 ,42]
console.log("Array: ", array);

function messy(x) {
    var results = x * x;
    return results;
}

var result = array.map(isEven);
// should return [false, true, false, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})

// should return []
console.log("Squareroot of array:", results); 


