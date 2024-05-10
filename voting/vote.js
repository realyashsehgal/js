function votingright()
{
    let age;
    age = parseInt(document.getElementById("age").value);
    if(age >= 18)
    {
        document.getElementById("decision").innerHTML = "GGs my boi you can vote";
    }
    else
    {
        document.getElementById("decision").innerHTML = "aah sorry mate you gotta wait";
    }
}