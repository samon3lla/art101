// index.js - Lab 6: Arrays and Objects 
// Author: Sam Fonseca-Vallejo

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


// Define Variables 
let myTransport = [
  "Car"
  "Walking"
  "Bus"
  "Bike"
];


// Object for main ride 
let myMainRide = {
  make: "Volkswagen",
  model: "Jetta",
  year: "2017",
  color: "black",
  age: function () {
    return 2024 - this.year;
  }
};


//Output 
document.writeln("Transportation Methods: " + myTransport + "<br>");

//Output 
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "<,/pre>");

