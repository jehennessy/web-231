// start program

/*
============================================
; Title:  hennessy-assignment-3.4.js
; Author: Professor Krasso
; Date:   14 December 2018
; Modified By: Jordan Hennessy
; Description: Demonstrate how to create a loop.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Assignment 3.4"));
// end header

console.log("\n");


// variable
var x = 6;

// functions
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

function match(arg1, arg2) {
  if(arg1 === arg2) {
    return true;
  }
  else {
    return false;
  }
}

function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}

function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

// for loop
for(var y = 0; y < 11; y++) {
  var y;
  var y = randomNumber();
  // if...else statement
  if (match(x, y)) {
    logMatch(x, y);
  }
  else {
    logMismatch(x, y);
  }
}

// End program

