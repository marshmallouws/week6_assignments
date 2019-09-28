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

document.getElementById("reloadBtn").addEventListener("click", function() {
    getPersons();
});

// Get the modal
var modal = document.getElementById("addPersonModal");

// Get the button that opens the modal
var btn = document.getElementById("addPersonBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("addPersonSubBtn").addEventListener("click", function(){
    var first = document.getElementById("firstname");
    var last = document.getElementById("lastname");
    var phone = document.getElementById("phone");
    var url = "http://localhost:8080/jpareststarter/api/persons/new";

});