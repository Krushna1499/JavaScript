//Arrow Function 
//Named Functions
//Anonymous Functions

function add(num1,num2) {
    return num1+num2;
}
var subFunc = function(num1,num2)
{
    var name ="John Doe"
    return num1-num2;
}

var subResult = subFunc(12,30);
console.log(subResult);

var addResult = add(10,12);
console.log(addResult);


var subFunc =function(num1,num2)
{
    var name ="John Doe";
    return num1-num2;
}
var subResult =subFunc(12,30);
console.log(subResult);

var mulFun =(num1,num2)=>{
    return num1*num2;
}

var mulResult =mulFun(30,12);
console.log(mulResult);

//spread operator

var s1 =["Mahesh","Shruti","Shivani","Onkar"];

var s2 = ["Akshay","Kishor","Aniket","Hamu"];

var s3 =[...s1,...s2]; 
console.log(s3);

var obj1={
    firstName:"John",
    lastName:"Doe",
    age:20
}
var obj2 =
{
age:20
}
var obj3 =
{
    ...obj1,
    ...obj2
}
console.log(obj3);

var s = Symbol("FIRST_ODD_NUMBER");

var obj4={};
obj4.firstName="John";
obj4.lastName="Doe";
obj4["age"] = 10;
obj4[s] = 1;

console.log(obj4);
var obj5={};
obj5[s] = 1;
var obj6={};

obj6 [s] = 1;
console.log(obj4,obj5,obj6);

//Rest Properties
var hobbies = ["Painting","Drawing","Singing","Playing"];

var[first,second, ...resthobbies] = hobbies;

console.log(first,second,resthobbies);

function addition(...numbers) {
    return numbers.reduce((previousValue,currentValue)=>{

        return previousValue + currentValue;
    },0);
}
//constant Objects 
const car = {type:"Ferrari",model:"650",color:"RED"};

car.color="white";

console.log(car.color);

Number("  ");


// unary operator

let y="5";
let x= + y;
console.log(typeof(x));
console.log(typeof(y));

let y1 = "Krishna";
let x1 = + y1;

console.log(typeof(x1));
console.log(typeof(y1));






