// start program

/*
Title: hennessy-discussion-6.1-fix-2.js
Date: 1/17/2019
Author: Gabriel Sanchez
Modified by: Jordan Hennessy
Description: Objects and Built-In Objects
*/

//Person Object
var person = { // had an ending closing curly brace but not an opening one
  firstName: "Jose",
  lastName: "Sanchez",
  age: 21,
  weight: 90,
  desiredWeight: 80,
  eyeColor: "Brown",
  superPower: "Jump",
};
function loseWeight(){
  if (person.desiredWeight < person.weight)
  return person.weight - person.desiredWeight; // changed divide to subtract and added semi-colon at the end
};
// output
console.log('');
console.log(person.firstName +" "+person.lastName +" will need to lose: " +loseWeight() + " Lbs"); // changed capital "W" to lowercase because that's what the expected output shows

//Expected Output
// Jose Sanchez will need to lose: 10 Lbs

//End program
