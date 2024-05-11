let obj = {first_name:"yash sehgal", erpid:"0231bca015" };
document.getElementById("ans").innerHTML =  `The name of the student is ${obj.first_name} and the erp id of this student is ${obj.erpid}`;



const fruits = ["apple", "banana", "kiwi","pineapple"];
let flen = fruits.length;
let text = "<ul>";
for(let i = 0 ; i < flen; i++)
    {
        text+= "<li>" + fruits[i] + "</li>";
    }
text += "</ul>";
document.getElementById("fruits").innerHTML = text;