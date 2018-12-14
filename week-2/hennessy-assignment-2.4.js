// start program

/*
============================================
; Title:  hennessy-assignment-2.4.js
; Author: Professor Krasso
; Date:   9 December 2018
; Modified By: Jordan Hennessy
; Description: Demonstrates how to create functions with and without parameters.
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Assignment 2.4"));
// end header

// variables
var firstName = "Jordan ";
var lastName = "Hennessy";
var year = "2018 ";
var month = "December ";
var day = "9th ";
let temp = 33.5;
let place = 1;
var age = parseInt(26);
let savings = 150000;

// functions
function fullName(firstName, lastName) {
  return firstName + lastName;
}

function dateWriter(year, month, day) {
  return year + month + day;
}

function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

function convertToInt(age) {
  return age;
}

function convertToFloat(savings) {
  return savings - parseFloat(1000);
}

//output
console.log("\n")
console.log("Hello my name is " + fullName(firstName, lastName) + "!");
console.log("Today's date is " + dateWriter(year, month, day) + "and the current temperature is " + formatNumber(temp, place) + " degrees.");
console.log("I am " + convertToInt(age) + " years old and my savings account goal is " + convertToFloat(savings) + " dollars.");
