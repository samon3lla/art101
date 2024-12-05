// index.js - Lab 7: Functions
// Author: Sam Fonseca-Vallejo



// sortaUsername - sorting the letters of a user's name 


function sortaUsername() {
    var userName = window.prompt ("Hi! WHat is ur name, please, let me fix it."); 
    console.log("userName =", userName);

    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // sort the array 
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    // join array back to a string 
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    
    return nameSorted;
   
}

// Output
document.getElementById('script-output').innerHTML = "Name fixed! " + sortaUsername() + "<br>";

// jQuery document ready function
$(document).ready(function () {
    $('#script-output').append("<p>This is the output from the Javascript file!</p>");
});