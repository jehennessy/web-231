// start program

/*
============================================
; Title:  hennessy-exercise-6.3.js
; Author: Professor Krasso
; Date:   15 January 2019
; Modified By: Jordan Hennessy
; Description: Object literal with get and set methods
;===========================================
*/


// header
const header = require('../hennessy-header.js');

console.log(header.display("Jordan", "Hennessy", "Exercise 6.3"));
// end header

console.log("\n")

// variable
var ticket = {

  id:"1302",
  name:"Customer Service",
  requester:"Bret Smith",

  get ident(){ // returns the value for id
    return this.id;
  },

  set ident(val){ // sets the value for id
    this.id = val;
  },

  get names(){ // returns the value for name
    return this.name;
  },

  set names(val){ // sets the value for name
    this.name = val;
  },

  get requesterName(){ // returns the value for requester
    return this.requester;
  },

  set requesterName(val){ // sets the value for requester
    this.requesterName = val;
  }
};

// output
console.log("{id: " + ticket.id + "," + " name: " + ticket.name + "," + " requester: " + ticket.requester + "}");

//end program
