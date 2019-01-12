// start program

/*
============================================
; Title:  hennessy-exercise-5.2.js
; Author: Professor Krasso
; Date:   12 January 2019
; Modified By: Jordan Hennessy
; Description: Iterate over an array using the forEach function.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 5.2"));
// end header

console.log("\n")

// string array
var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

//output
foods.forEach((food) =>  {
  console.log(food);
});

// end program
