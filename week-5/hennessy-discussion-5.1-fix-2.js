/*
============================================
; Title:  Discussion 5.1 - Advanced Arrays
; Author: Tyler Armstrong
; Date:   13 January 2019
; Modified By: Jordan Hennessy
; Description: Showcases arrays.
;===========================================
*/


let promotions = new Map();
promotions.set("A1C", "2001");
promotions.set("SrA", "2003");
promotions.set("SSgt", "2007");
promotions.set("TSgt", "2012");
promotions.set("MSgt", "2015");


/**
 * Params: array
 * Response: Value of array's index
 * Description: Returns a random drink from the drinks array
 */
function listPromotions(promotions) {
  for (const [key, value] of promotions) { // replaced the colon with a coma to separate key and value, also added of before promotions
    console.log("I was promoted to " + key + " in " + value + ".");
  }
}

listPromotions(promotions);
