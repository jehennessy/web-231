// start program

/*
============================================
; Title:  hennessy-exercise-4.2.js
; Author: Professor Krasso
; Date:   3 January 2019
; Modified By: Jordan Hennessy
; Description: Pass an array through a function.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 4.2"));
// end header

console.log("\n")

// array
var fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// function
function getFruit(arr) {
  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x])
  }
}

// output
getFruit(fruit);

// end program
