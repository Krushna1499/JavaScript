//primitive
// seven types : String,Number,Boolean,null,undefined,Symbol,Bigint

const score = 100;
const scoreValue = 100.3;
const isLoggedIn =false;
const outsideTemp =null;
let userEmail;

const id =Symbol('123');
const anotherId =Symbol('123');
console.log(id===anotherId);

// const bigNumber = 345558532158415n;

//Reference (Non primitive)
//Array,object,Functions
//become master in javascript(learn objects,web events or browser events)

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age: 22,
}
const myFunction = function 
(params) {
    console.log("Hello World");
    
}
console.log(typeof  bigNumber);
//Stack (Primitive) Heap(Non-Primitive)

let myYoutubename ="hiteshchoudharyditcom"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(
    myYoutubename
);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
 userTwo.email="hitesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);