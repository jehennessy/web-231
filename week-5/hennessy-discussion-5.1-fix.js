/*
============================================
; Title:  cousar-assignment-5.1.js
; Author: Donald Cousar
; Date:   10 Jan 2019
; Modified by: Jordan Hennessy
; Description: Debug my keyed collection array
;===========================================
*/

//BEGIN CODE

// set collection of favorite items

  var favorites = new Map();
  favorites.set('color', 'red'); // sets should be separated by a coma not a colon
  favorites.set('food', 'pizza');
  favorites.set('candy bar', 'snicker');
// deleted the favorites.clear() because it cleared the sets before they were called

// test for populated collection and iterate through collection, then print to console
  if(favorites.size > 0) {
    for(var [key, value] of favorites) {
        console.log('Your favorite ' + key + ' is: ' + value);
    }
//clean up collection
    favorites.clear();
  }

  //END CODE
