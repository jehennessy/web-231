/*
============================================
; Title:  hennessy-discussion-6.1-fix.js
; Author: Josh Price
; Date:   19 January 2019
; Modified By: Jordan Hennessy
; Description:  Object Collections
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../hennessy-header');
var displayHeader = header.display("Jordan", "Hennessy", "Discussion 6.1 Fix");
console.log(displayHeader);
console.log('\n');

//Begin Program

// Objects
var bob = { // var bob was not defined because it was spelled bab
  fullName: 'Bob Smith',
  age: 45,
  height: 6.4,
  calcYear: function() {
    this.year = 2019 - this.age;
    return this.year;
  }
};

var matt = {
  fullName: 'Matt Smith',
  age: 35,
  height: 6.9,
  calcYear: function () {
    this.year = 2019 - this.age;
    return this.year; // changed birthYear to year because that's what the function is defining
  }
};

//if state to output who's older
if(matt.calcYear() > bob.calcYear()) {
  console.log(bob.fullName + ' is older he was born in ' + bob.year);
} else if (matt.year < bob.year) {
  console.log(matt.fullName + ' is older he was born in ' + matt.year);
} else {
  console.log('They are the same age');
}

//Output
//Bob Smith is older he was born in 1974

//end program
