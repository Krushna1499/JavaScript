let a =10;
let b =20;
let c= 30;

function callMe()
{   let d= 50;     //only in function scope
    console.log(a,b,c,d);
    {
        var r =10;
     }
     
     console.log(d);
console.log(r);
}

let x = 2 + 3 +"5";
document.getElementById("demo").innerHTML = x;

