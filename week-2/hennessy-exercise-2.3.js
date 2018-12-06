// start program 

/*
============================================
; Title:  hennessy-exercise-2.3.js
; Author: Professor Krasso 
; Date:   5 December 2018
; Modified By: Jordan Hennessy
; Description: Demonstrates how to define and call property functions
;===========================================
*/

// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 2.3"));
// end header

// function property definitions
greeting.hello = "Hello ";
myName.jordan = "Jordan ";
myLastname.hennessy = "Hennessy!";

// functions
function greeting() {
  return greeting.hello;
}

function myName() {
  return myName.jordan;
}

function myLastname() {
  return myLastname.hennessy;
}

// output
console.log("\n");
console.log(greeting() + myName() + myLastname());

// end program