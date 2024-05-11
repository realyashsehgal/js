function functionone(){
    console.log("this function got intitated");
    var name;
    name = document.getElementById("name").value;
    console.log(name);
    document.getElementById("output").innerHTML = name;
    if(name === 1){
        document.getElementById("output").innerHTML = "if statement got invoked";
    }
    else{
        document.getElementById("output").innerHTML = "burh you didn't typed it works ??";
    }
}
function sum(){
    let x,y;
    x = parseInt(document.getElementById("num1").value);
    y = parseInt(document.getElementById("num2").value);
    document.getElementById("output2").innerHTML = x+y ;
}
function one_fun(){
    document.getElementById("output2").innerHTML = +1;
}
function checkdate()
{   document.getElementById("date").innerHTML = Date(); 
}
x = 50;
console.log(x);
let arr = [54,12,13,9,53,7];
document.getElementById("array").innerHTML = arr;
function num_sort(){
    let sorted = arr.sort(function(a,b) {return a - b});
    document.getElementById("numsorted").innerHTML = sorted;
}
function str_sort(){
    let sorted = arr.sort();
    document.getElementById("strsorted").innerHTML = sorted;
}
function verygood()
{
    alert("very good you are smarter than i though");
}
function dumb()
{
    alert("idiot look at the first number of these number idiot");
}