// start program

/*
============================================
; Title:  hennessy-assignment-6.4.js
; Author: Professor Krasso
; Date:   16 January 2019
; Modified By: Jordan Hennessy
; Description: Nested object literals
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Assignment 6.4"));
// end header

console.log("\n")

// object with nested object
const ticket = {
  id: 105,
  name: "Bob Jones",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "first",


  // nested object
  person: {
    id: 205,
    firstName:"Bob",
    lastName:"Jones",
    jobTitle:"Programmer I",
  }

};

// output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

// end program
