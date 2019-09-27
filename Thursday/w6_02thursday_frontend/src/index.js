import 'bootstrap/dist/css/bootstrap.css'

var table = "<tr><th>Id</th><th>First name</th><th>Last name</th>" +
                "<th>Phone</th><th>Created</th><th>Last edited</th></tr>";

function toHtml(array) {
    var person = array.map(item => "<tr><td>" + item.id + "</td><td>"
        + item.firstname + "</td><td>"
        + item.lastname + "</td><td>"
        + item.phone + "</td><td>"
        + item.created + "</td><td>"
        + item.lastEdited + "</td></tr>").join("");
    return table + person;
}

function getPersons() {
    var url = "http://localhost:8080/jpareststarter/api/persons/all";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("table").innerHTML = toHtml(data);
        });
}

document.getElementById("getpersonsbtn").addEventListener("click", function() {
    getPersons();
});