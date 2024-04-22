const accountId =545454;
let accountEmail="Krishna@gmail.com ";
var accountPass="5552";
accountCity="Pune";
accountEmail="jsdjs@JHCXJ.COM";
accountPass="124542";

accountEmail="Hsjdh@gmail.com";
accountPassword="244454";

console.log(accountId);
//for printing all values in single way

console.table([accountId,accountEmail,accountPass,accountCity]);
/*
Prefer not to use var beacause of issue
in block scope and function
*/
//we can also declared a variable without using let,var keyword this totally wrong
// if we dont put any value to the variable then it shows undefined
let accountState; 
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);

"use strict ";
//it is used for it treat all the code as newer version
