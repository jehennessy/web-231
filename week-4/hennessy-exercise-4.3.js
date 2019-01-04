// start program

/*
============================================
; Title:  hennessy-exercise-4.3.js
; Author: Professor Krasso
; Date:   3 January 2019
; Modified By: Jordan Hennessy
; Description: Filtering arrays.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 4.3"));
// end header

console.log("\n")

// array
const vehicle = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// function
function getValue(arr, val) {
  for (var x = 0; x < arr.length; x++) {
    if(arr[x] === val) {
      console.log(arr[x]);
    }
  }
}

// output
console.log("-- DISPLAYING ARRAY ITEMS --");
  for (var x = 0; x < vehicle.length; x++) {
    console.log(vehicle[x]);
  }

console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicle, "Motorcycle");

console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicle, "Bus");

// end program
