// start program (added this was missing)
/*
============================================
; Title:  hennessy-discussion-3.1-fix.js
; Author: Drew Hanson
; Date:   15 December 2018
; Modified By: Jordan Hennessy
; Description: Create a control statement
;               with two errors.
;===========================================
*/

// display header
const header = require('../hennessy-header.js');
console.log(header.display("Jordan", "Hennessy", "Discussion 3.1"));
console.log("");

// Set the current day of the week to a variable,
var date = new Date(); // incorrect format of new date, also new date needs to be assigned to a separate variable for the getDate function to work
var day = date.getDay(); // changed the uppercase V to lowercase v so it's recognized as a variable, added the date variable to the getDay function

// Switch statement for day of the week (added)
switch (day) { // changed the uppercase D to a lowercase D to match the variable
  case 1: // improper spacing, in the switch statement, everything was double tabbed, I would check to make sure your .editorconfig file is set up correctly
    console.log("Its PokaMon er Monday"); // deleted extra space
    break;
  case 2:
    console.log("It's the day that ends with day, oh I mean Tuesday!");
    break;
  case 3:
    console.log("Mid week holla");
    break;
  case 4:
    console.log("Can the weekend just start now?"); // extra space at beginning and C wasn't capitalized
    break;
  case 5:
    console.log("Friday more like FRI-YAY!");
    break;
  case 6:
    console.log("Ah breathe...smell that its Saturday!"); // spelling error on breathe
    break
  case 0: // getDate function returns values 0-6, changed case number from 7 to 0 for Sunday
    console.log("Sunday today relax!");
    break;
  default: // added a default statement
    console.log("Invalid entry!")
    break;
}

// end program (added this was missing)
