// start program

/*
============================================
; Title:  hennessy-exercise-5.3.js
; Author: Professor Krasso
; Date:   12 January 2019
; Modified By: Jordan Hennessy
; Description: Iterate over an array like object using the forEach function.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 5.3"));
// end header

console.log("\n")

// array like object
var famousComposers = [
  {
    firstName: 'Ludwig van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8,
  },

  {
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10,
  },

  {
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9,
  },

  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6,
  },

  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5,
  },
];

// output
console.log("-- COMPOSERS --");

famousComposers.forEach(function(composer){
  console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)
});

// end program
