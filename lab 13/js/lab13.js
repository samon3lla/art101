// index.js - Lab 13: Loops
// Author: Sam Fonseca-Vallejo

// Constants

// Functions
let oneLongString = "";

function FizzBuzz() {
  for (let i = 1; i <= 200; i++) {
    if (i % 15 == 0) {
      // document.writeln("FizzBuzz");
      oneLongString += i + ") FizzBuzz!<br>";
      console.log("Hi");
    }
    else if (i % 21 == 0) {
      // document.writeln("FizzBoom");
      oneLongString += i + ") FizzBOOM!💥<br>";
      console.log("Hi");
    }
    else if (i % 35 == 0) {
      // document.writeln("BuzzBoom");
      oneLongString += i + ") BuzzBOOM!💥<br>";
      console.log("Hi");
    }
    else if (i % 3 == 0) {
      // document.writeln("Fizz");
      oneLongString += i + ") Fizz!<br>";
      console.log("Hi");
    }
    else if (i % 5 == 0) {
      // document.writeln("Buzz");
      oneLongString += i + ") Buzz!<br>";
      console.log("Hi");
    }
    else if (i % 7 == 0) {
      // document.writeln("Boom");
      oneLongString += i + ") BOOM!💥<br>";
      console.log("Hi");
    }
    else {
      oneLongString += i + ") " + i +  "<br>";
      console.log("Hi");
    }
  }
  $("#output").html(oneLongString);
}

FizzBuzz();


function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();