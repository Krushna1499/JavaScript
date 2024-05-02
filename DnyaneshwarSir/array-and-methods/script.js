let numberList =[0,1000,500,600,2000];
let reverseList=[2,3,5,9];
let reverseList1=reverseList.reverse();
console.log(reverseList1);
let sortedList =numberList.sort((a,b)=>{
    return a-b;
});

console.log(sortedList);

numberList.forEach(function(value){
    console.log(value*2);
});
let isAnyNumberList =  numberList.some(value=>
{
    console.log(value>400); 

});

const myHobbies = [];
myHobbies[0]="Krishna";
myHobbies[1]="Lavhare";
myHobbies = [];

//Scope

