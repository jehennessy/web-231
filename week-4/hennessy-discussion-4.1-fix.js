// Start Program

/*
; Title:  Discussion 4.1
; Author: Alan Edwards
; Date:   5 January 2019
; Modified by: Jordan Hennessy
; Description: Array with errors
;===========================================
*/

/*
; Find and correct two errors in code.
;
; EXPECTED OUTPUT:
;   [10, 6]
;   [5,7,11,9,1]
*/

// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Discussion 4.1"));
// end header

console.log("\n")


var even_numbers = [];
        var odd_numbers = [];

        function separate_evens_from_odds(value) {
            if ( value % 2 ) {
                odd_numbers.push(value); // added . between odd_numbers variable and push method
            }
            else {
                even_numbers.push(value);
            }
          } // missing ending curly brace for function

        var array_of_numbers = [5,7,11,10,9,1,6];

        array_of_numbers.forEach(separate_evens_from_odds);

        console.log(even_numbers);
        console.log(odd_numbers);
        //

// End program
