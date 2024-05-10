
function tables() {
    
    var name = document.getElementById("namee").value;
    var id = document.getElementById("idd").value;

    //the insert row is a method in java script it add rows as follows and then insert cell method ads a cell to that row here i had
    // threee heads s.no name id thats why added only 3 cells
    var table = document.getElementById("studentTableBody");
    var newRow = table.insertRow();
    var sNoCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var idCell = newRow.insertCell(2);


    sNoCell.textContent = table.rows.length ;

    // Set the cell values
    nameCell.textContent = name;
    idCell.textContent = id;

    // Clear input fields after submission
    document.getElementById("namee").value = "";
    document.getElementById("idd").value = "";
}