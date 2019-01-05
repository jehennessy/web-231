// start program

/*
============================================
; Title:  hennessy-assignment-4.4.js
; Author: Professor Krasso
; Date:   5 January 2019
; Modified By: Jordan Hennessy
; Description: Using predicates to filter arrays.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Assignment 4.4"));
// end header

console.log("\n")

// string array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"]

// sort function
function arr() {
  for (var x = 0; x < states.length; x++) {
    console.log(states[x]);
  }
}

// predicate
function getState(arr, val) {
  if (arr === val) {
    return true;
  }
  else {
    return false;
  }
}

// Output original array
console.log("-- ORIGINAL ARRAY --");
  arr(states);


// new line
console.log("");

// Output sorted array
console.log("-- SORTED ARRAY --");
  arr(states.sort());

// new line
console.log("");

// Output selected value
console.log( "-- SELECTED VALUE --" + "\n" +
  states.filter(
    function (arr) {
      return getState(arr, "Iowa");
    }
  ) [0]
)
