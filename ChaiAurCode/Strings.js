const name="krishna";
const repoCount=50;

// console.log(name+repoCount+"Value"); --outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('Krishna')

//Methods

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
const newString=gameName.substring(0,4) //start from 0 index and end no 4 
console.log(newString);

const anotherString = gameName.slice(-6,1)
console.log(anotherString);

const newS ="   Krishna Lavhare ";
console.log(newS.trim());

const url ="https://krishnalavhare.com/hitesh%20choudhary"

 console.log(url.replace('%20','-'));

 console.log(url.includes('krishna')); 
 console.log(gameName.split('-'));
 
