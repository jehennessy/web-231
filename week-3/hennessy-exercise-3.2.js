// start program

/*
============================================
; Title:  hennessy-exercise-3.2.js
; Author: Professor Krasso
; Date:   14 December 2018
; Modified By: Jordan Hennessy
; Description: Demonstrate how one might incorporate logical error handling in an application.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 3.2"));
// end header

console.log("\n");


// Variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";


// functions
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


// Output for match function
console.log(match("A","B"));
console.log(match(1,1));


// If.. else statement output test for all 6 variables
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
}
else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar3, testVar4)) {
  logMatch(testVar3, testVar4);
}
else {
  logMismatch(testVar3, testVar4);
}

if (match(testVar5, testVar6)) {
  logMatch(testVar5, testVar6);
}
else {
  logMismatch(testVar5, testVar6);
}


// end program
