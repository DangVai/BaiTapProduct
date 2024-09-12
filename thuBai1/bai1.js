var id = 0;
function sell() {
    id++;
    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#qtt").value;
    var price = document.querySelector("#price").value;
    var discount = document.querySelector("#count").value;
    var subtotal = quantity * price * (1 - discount / 100);

    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + discount + "</td>";
    row += "<td>" + subtotal.toFixed(2) + "</td>";
    row += "</tr>";
    
    document.querySelector("#tbl").innerHTML += row;
}
