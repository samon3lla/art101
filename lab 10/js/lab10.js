// index.js - Lab 10: JavaScript for the Web 
// Author: Sam Fonseca-Vallejo

// Constants

// Functions

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
  $("#make-convo").click(function() {
    const newText = generateRandomText();
    // append a new div with the generated text to the output div
    $("#output").append('<div class=text><p>' + newText + '</p></div>');
  })
  

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();
