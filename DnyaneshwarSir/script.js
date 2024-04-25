function onclickExternal(params) {
    alert("You Clicked tw");
    
}
function onButtonClickExternal(params) {
    alert("Your clickked tw")

}
// documnet is global window object DOM
document.getElementById("firstPara").innerText="I am changing You";
document.getElementById("firstPara").title="this is Javascript";
document.getElementById("firstPara").style.color="red";

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

console.log(2==2);

console.log(2==3);
