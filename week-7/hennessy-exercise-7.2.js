// start program

/*
============================================
; Title:  hennessy-exercise-7.2.js
; Author: Professor Krasso
; Date:   24 January 2019
; Modified By: Jordan Hennessy
; Description: Create a constructor object
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 7.2"));
// end header

console.log("\n")

// constructor object
function employee(id, firstName, lastName, title) { // creating a constructor object
  this.id = id; // defining the parameters
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
};

// array
var employees = [ // defining variable with an array
  new employee('1', 'Thomas', 'Edison', 'Software Engineer'),
  new employee('2', 'Benjamin', 'Franklin', 'Programmer'),
  new employee('3', 'Nikola', 'Tesla', 'Project Manager'),
  new employee('4', 'Charles', 'Babbage', 'Product Manager'),
  new employee('5', 'Alexander', 'Bell', 'Business Analyst')
];

// output
for (let x = 0; x < employees.length; x++) { // loop over the array
  console.log(employees[x].id + " " + employees[x].firstName + " " + employees[x].lastName + " " + employees[x].title)
}

// end program
