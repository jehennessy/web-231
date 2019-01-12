// start program

/*
============================================
; Title:  hennessy-assignment-5.4.js
; Author: Professor Krasso
; Date:   12 January 2019
; Modified By: Jordan Hennessy
; Description: Filter an array using the map function.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Assignment 5.4"));
// end header

console.log("\n")

// array like object
var famousComposers = [
  {
    firstName: 'Ludwig van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: '8',
  },

  {
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: '10',
  },

  {
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: '9',
  },

  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: '6',
  },

  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: '5',
  },
];

// filters
var ratings = famousComposers.map(function(composer){
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});

var genres = famousComposers.map(function(composer){
  return "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName;
});



// output
console.log("-- COMPOSER BY RATING --")
ratings.forEach(function(rating){
  console.log(rating + "\n")
});

console.log("-- COMPOSER BY GENRE --")
genres.forEach(function(genre){
  console.log(genre + "\n")
});

// end program


// end program
