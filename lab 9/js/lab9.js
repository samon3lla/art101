// index.js - Lab 9: Libraries and jQuery 
// Author: Sam Fonseca-Vallejo

// Constants: 

// Functions

$(".minor-section").append("<button id='button-minsec'>Make Special</button>");
$(".minor-section button").click(function() {
    $(this).parent().toggleClass("special");
    $(this).toggleClass("normal");
    // $("#button-challenge").toggleClass("normal")
})

// $("#problems").append("<button id='button-problems'>Make Special</button>");
// $("#button-problems").click(function() {
//   $("#problems").toggleClass("special");
//   $("#button-problems").toggleClass("normal");


// });

// $("#results").append("<button id='button-results'>Make Special</button>");
// $("#button-results").click(function() {
//   $("#results").toggleClass("special");
//   $("#button-results").toggleClass("normal");

// });

function defaultName() {

}

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();

