import 'bootstrap/dist/css/bootstrap.css'

var table = "<tr><th>Id</th><th>Name</th></tr>";

function toHtml(array) {
    var person = array.map(item => "<tr><td>" + item.id + 
            "</td><td>" + item.name + "</td></tr>").join("");
    return table + person;
}

function getPersons() {
    var url = "http://localhost:8080/w6_thursday_CORS/api/simple/read";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("table").innerHTML = toHtml(data);
        });
}

document.getElementById("getPersonsBtn").addEventListener("click", function() {
    getPersons();
});



