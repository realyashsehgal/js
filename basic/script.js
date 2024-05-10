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