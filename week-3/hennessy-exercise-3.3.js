// start program

/*
============================================
; Title:  hennessy-exercise-3.3.js
; Author: Professor Krasso
; Date:   14 December 2018
; Modified By: Jordan Hennessy
; Description: Demonstrate how to convert an if...else statement to a switch statement.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 3.3"));
// end header

console.log("\n");


// variable
let eventKeyCode = 13;


// switch statement
switch (eventKeyCode){
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}

// end program
