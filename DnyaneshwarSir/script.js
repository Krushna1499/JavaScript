function onclickExternal(params) {
    alert("You Clicked tw");
    
}
function onButtonClickExternal(params) {
    alert("Your clickked tw")

}
// documnet is global window object DOM
// document.getElementById("firstPara").innerText="I am changing You";
// document.getElementById("firstPara").title="this is Javascript";
// document.getElementById("firstPara").style.color="red";

function showPassword(params) {
    if(document.getElementById("passwordField").type === "password")
    {      
         document.getElementById("passwordField").type ="text";

    } else{
        document.getElementById("passwordField").type="password";
    }
}
function hide(params) {
    document.getElementById("myDiv").style.display="none";
    
}
function show(params) {
    document.getElementById("myDiv").style.display="block";
    
}
// Comparison operator

// console.log(2==2);

// console.log(2==3);

console.log(2===2);
console.log(2==="2");
console.log(2!=3);
console.log(2!="3");

var c = 20, d = 40, e;

e=c==d;
e=c!=d;
console.log(e);

//Logical operators 
let result = 4<3 && 5>1;
console.log(result);

let res = 4<3 || 8>9;
console.log(res);

let k="4";
console.log(typeof k);

g=true;
console.log(typeof g);

let myVar;
console.log(myVar);

//myVar=3;
myVar=undefined;
myVar = null;

const yourVar = 7;

//object Creation

var f1={
color:"grey",
type:"tablefan",
price:1300,
increaseSpeed:function 
(params) {
    console.log("My Speed Increased");
},
decreaseSpeed:function (params) {
    console.log("My Speed Decreased");
},
onOff:function (params) {
}

}
//access Object Properties    
console.log(f1.color);
console.log(f1.increaseSpeed);  //25/04/24Sir

