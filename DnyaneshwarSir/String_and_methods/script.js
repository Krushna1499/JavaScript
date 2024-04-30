var text ="My favourite book is 'Bhagvat Geeta'";

document.getElementById("firstPara").innerHTML = text;
var firstName="John";
var lastName="Wick";

var str =`My name is ${firstName} ${lastName},  Addition of two numbers ${2+3}`;
document.getElementById("para2").innerHTML=str;

let p ="Namrata";
let lengthofp =p.length;
console.log(lengthofp);

//we can assign string as following

let s1=new String("My name is John Wick");
let s2="My name is Iron Man"; //common way of assign string

let firstChar=s2.charAt(5);
console.log(firstChar);


let CapitalMCharcode =s2.charCodeAt(0);
console.log(firstChar);

console.log(CapitalMCharcode);
console.log(s2[3]);

console.log(s2[8]);
console.log(s2.at(8));

//slice first using indexes rule and second not using indexes
let s3 =s2.slice(11,19);
console.log(s3);

//substring 
let s4 =s2.substring(11,14);
console.log(s4);
// substr
let s5 = s2.substr(11,4)
console.log(s5);

let s6 =s2.toUpperCase();
console.log(s6);
let p2="   Hello World   ";
// trim
let s7=p2.trim(); // starting and ending spaces will remove
console.log(s7);

console.log(s7.length);

let s8 ="10";
// padstart
let s9 =s8.padStart(5,0);
console.log(s9);
//Replace
let s10 = "English is universal language, I can talk in English";

//ReplaceAll 
console.log(s10.replace("English","Marathi"));
s12=s10.replaceAll("English","Marathi");
console.log(s12);

//split

let hobbies ="Painting|Playing|Dancing";

let hobbiesArray = hobbies.split("|");
console.log(hobbiesArray);
console.log(hobbiesArray.length);
// Stirng Search 
let isPlayingExist = hobbies.includes("Playing"); //true
console.log(isPlayingExist);

//itshows staring index of that particular string
let gtext="Hello my name is Maverick";
console.log(gtext.lastIndexOf("Maverick"));



