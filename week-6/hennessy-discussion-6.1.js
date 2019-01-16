// Start Program

/*
; Title:  Discussion 6.1
; Author: Jordan Hennessy
; Date:   15 January 2019
; Modified by: none
; Description: Find errors in program using object properties.
;===========================================
*/

/*
; Find and correct two errors in code.
;
; EXPECTED OUTPUT:
;   Yesterday was Monday.
;   Today is Tuesday.
;   Tomorrow will be Wednesday.
*/

// object
let weekDay = {
  dayName: "Monday",

  get day() {
    return this.dayName;
  },

  set day(val) {
    this.weekDay = val;
  }
}

// reassign weekDay
weekDay.day = "Tuesday";
weekDay.day = "Wednesday";

// output
console.log("Yesterday was " + weekDay.day + ".");
console.log("Today is " + weekDay.day + ".");
console.log("Tomorrow will be " + weekDay.day + ".");

// end program
