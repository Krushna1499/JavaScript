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

