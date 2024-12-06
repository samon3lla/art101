// index.js - Lab 8: Anon Functions and Callbacks 
// Author: Sam Fonseca-Vallejo

// Constants

// Functions 

// Array definition and assignment 
function is Even(x){
    return (x % 2 == 0);
}

// Array definition and assignment
let array = [3, 6, 89, 76, 42];
console.log("Array: ", array);
document.writeln("Array: " + array + "<br>");
// Messy function to square elements of array
function messy(x) {
  var results = x * x;
  return results;
}

// .map applies Messy function to elements of array
let mapResults = array.map(messy);
console.log("Array Elements Squared: ", mapResults);
document.writeln("Array Elements Squared: " + mapResults + "<br>");

// Variable evenEven holds the values of array.map(anonfunction)
let evenEven = array.map(function (x) {
  return (x % 2 == 0);
})
console.log("Anon Function i.e. Even Verification: ", evenEven);
document.writeln("Results: " + evenEven);


function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
