// Start Program

/*
; Title:  Discussion 5.1
; Author: Jordan Hennessy
; Date:   9 January 2019
; Modified by: none
; Description: Advanced array with errors
;===========================================
*/

/*
; Find and correct two errors in code.
;
; EXPECTED OUTPUT:
;   Wine goes with chocolate.
;   Cola goes with hamburgers.
;   Orange juice goes with pancakes.
*/

// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Discussion 5.1"));
// end header

console.log("\n")

// variable

var pairing = new Map();
pairing.set('Wine', 'chocolate');
pairing.set('Cola', 'hamburgers');
pairing.set('Orange juice', 'pancakes');
pairing.set('Apple juice', "cereal");
pairing.delete('Apple juice');

for (var [key, value] of pairing) {
  console.log(key + ' goes with ' + value + '.');
}

