// index.js - Lab 12: Condtionals
// Author: Sam Fonseca-Vallejo

// Constants

// Functions

function sortingHat(str) {
    length = str.length;
    mod = length % 4;
    if (mod == 0 ) {
      return "Gryffindor";
    }
    else if (mod == 1 ) {
      return "Ravenclaw";
    }
    else if (mod == 2 ) {
      return "Slytherin";
    }
    else if (mod == 3 ) {
      return "Hufflepuff";
    }

}

  $("#button").click(function() {
    let name = $("#input").val();
    let house = sortingHat(name);
    $("#output").html('<div id="thing"><p>The Sorting Hat has sorted you into ' + house + '!</p></div>');
  });

function main() {
  console.log("Main function started.");

  // the code that makes everything happen
}

// let's get this party started
main();