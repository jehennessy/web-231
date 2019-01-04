/*
============================================
; Title:  hennessy-discussion-3.1-fix-2
; Author: Donald Cousar
; Date:   12/16/2018
; Modified By: Jordan Hennessy
; Description: Displays name in a sentence
;===========================================

Expected output:
your name is: Don
*/


//Start Program

//Pass name to function to get a string back describing input
function showNamed(name) { // improper spacing, 4 space tabs rather than 2 space tabs
  if (name.length > 0) { // changed brackets to parenthesis and added start curly brace
    return "your name is: " + name;
  } else { // deleted "or" because it's not needed
      return "check input:  Invalid name length";
    }
}


//Display function output
console.log(showNamed("Don"));

// End program (added)
