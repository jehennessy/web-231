// start program

/*
============================================
; Title:  hennessy-exercise-6.2.js
; Author: Professor Krasso
; Date:   15 January 2019
; Modified By: Jordan Hennessy
; Description: Program using a try/catch/finally statement
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 6.2"));
// end header

console.log("\n")



try{

  var n = 15;

  var k = 3;

  var sum = n-k;

if (sum > 10)throw "The sum is higher than 10";

  console.log(sum);

}catch(err){

  console.log("Catch clause: " + err);

}finally{

  console.log("Finally clause reached...");
}

// end program


