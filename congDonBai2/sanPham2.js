var id = 0;
var total = 0;

function Add(){
    id++;
    var pname = document.querySelector("#pname").value;
    var qty = document.querySelector("#qty").value;
    var price = document.querySelector("#up").value;
    var sub = qty * price;
    
    var row = "<tr>";
    row += "<td>" + id + "</td>";  
    row += "<td>" + pname + "</td>";  
    row += "<td>" + qty + "</td>";  
    row += "<td>" + price+"$" + "</td>";  
    row += "<td>" + sub.toFixed(2)+"$" + "</td>";  
    row += "</tr>";

    document.querySelector("#tbl").innerHTML += row;  
    
    total += sub;
    document.querySelector("#total").textContent = total.toFixed(2) + "$";
}
