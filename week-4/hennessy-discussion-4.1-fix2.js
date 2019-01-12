// Start program
/*
============================================
; Title:  trueworthy-assignment-4.js
; Author: Lea Trueworthy
; Date:    3 Jan 2019
; Modified by: Jordan Hennessy
; Description: Assignment 4.1; Fix the broken code
;===========================================
*/

// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Discussion 4.1 Fix"));
// end header

console.log("\n")

// variables (added)
var points = [40, 100, 1, 5, 25, 10];

var fruits = ["Banana", "Orange", "Apple", "Mango"];

var x = points.length; // added semicolon to end of variable declaration
var y = fruits.length; // added semicolon to end of variable declaration

// output (added)
console.log(x + y); // deleted extra parentheses
console.log(x - y);
console.log(x + x - y);
