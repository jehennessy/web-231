/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   1 December 2018
; Modified By: Jordan Hennessy
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Jordan";
var myLastName = "Hennessy";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

// assigning variables for Bob
var firstNameBob = "Bob";
var middleNameBob = "John";
var lastNameBob = "Smith";
var addressBob = "505 Main Street Omaha, NE";
var payRateBob = 10.50;
payRateBob.toFixed(1);
var hireDateBob = new Date(2016, 4, 22).toLocaleDateString();

// Bob's information string
var bob = "\n" + "First Name: " + firstNameBob + "\n" + "Middle Name: " + middleNameBob + 
    "\n" + "Last Name: " + lastNameBob + "\n" + "Address: " + addressBob + '\n' 
    +  "Pay Rate: $" + payRateBob + "\n" + "Hire Date: " + hireDateBob;

// assigning variables for Will
var firstNameWill = "Will";
var middleNameWill = "Jack";
var lastNameWill = "Johnson";
var addressWill = "2222 Pacific Street Omaha, NE";
var payRateWill = 11.00;
payRateWill.toFixed(1);
var hireDateWill = new Date(2013, 6, 15).toLocaleDateString();

// Will's information string
var will = "\n" + "First Name: " + firstNameWill + "\n" + "Middle Name: " + middleNameWill + 
    "\n" + "Last Name: " + lastNameWill + "\n" + "Address: " + addressWill + '\n' 
    + "Pay Rate: $" + payRateWill + "\n" + "Hire Date: " + hireDateWill;

// assigning variables for Beth
var firstNameBeth =  "Beth";
var middleNameBeth = "Annie";
var lastNameBeth = "Jackson";
var addressBeth = "3564 Grover Street Omaha, NE";
var payRateBeth = 15.20;
payRateBeth.toFixed(1);
var hireDateBeth = new Date(2010, 2, 13).toLocaleDateString();

// Beth's information string
var beth = "\n" + "First Name: " + firstNameBeth + "\n" + "Middle Name: " + middleNameBeth + 
    "\n" + "Last Name: " + lastNameBeth + "\n" + "Address: " + addressBeth + '\n' 
    + "Pay Rate: $" + payRateBeth + "\n" + "Hire Date: " + hireDateBeth;

// assigning variables for Lindie
var firstNameLindie = "Lindie"; 
var middleNameLindie = "Elizabeth";
var lastNameLindie = "Anderson";
var addressLindie = "987 I Street Omaha, NE";
var payRateLindie = 12.00;
payRateLindie.toFixed(1);
var hireDateLindie = new Date(2012, 8, 22).toLocaleDateString();

// Lindie's information string
var lindie = "\n" + "First Name: " + firstNameLindie + "\n" + "Middle Name: " + middleNameLindie + 
    "\n" + "Last Name: " + lastNameLindie + "\n" + "Address: " + addressLindie + '\n' 
    + "Pay Rate: $" + payRateLindie + "\n" + "Hire Date: " + hireDateLindie;

// assigning variables for Jeff
var firstNameJeff = "Jeff";
var middleNameJeff = "Aaron";
var lastNameJeff = "Newman";
var addressJeff = "764 Farnam Street Omaha, NE";
var payRateJeff = 10.50;
payRateJeff.toFixed(1);
var hireDateJeff = new Date(2017, 2, 14).toLocaleDateString();

// Jeff's information string
var jeff = "\n" + "First Name: " + firstNameJeff + "\n" + "Middle Name: " + middleNameJeff + 
    "\n" + "Last Name: " + lastNameJeff + "\n" + "Address: " + addressJeff + '\n' 
    + "Pay Rate: $" + payRateJeff + "\n" + "Hire Date: " + hireDateJeff;

// output 
console.log(bob);
console.log(will);
console.log(beth);
console.log(lindie);
console.log(jeff);
console.log("\n");

// end of program 
