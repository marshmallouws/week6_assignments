import 'bootstrap/dist/css/bootstrap.css'

var table = "<tr><th>Id</th><th>Age</th><th>Name</th>" +
                "<th>Gender</th><th>Email</th></tr>";

function toHtml(array) {
    var user = array.map(item => "<tr><td>" + item.id + "</td><td>"
            + item.age + "</td><td>"
            + item.name + "</td><td>"
            + item.gender + "</td><td>"
            + item.email + "</td></tr>").join("");
    return table + user;
}

function getUsers() {
    var url = "http://localhost:3333/api/users/";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("table").innerHTML = toHtml(data);
        });
}

function getUser(id) {
    var url = "http://localhost:3333/api/users/" + id;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var user =  "<tr><td>" + data.id + "</td><td>"
            + data.age + "</td><td>"
            + data.name + "</td><td>"
            + data.gender + "</td><td>"
            + data.email + "</td></tr>";
            document.getElementById("table").innerHTML = table+user;
        });
}

document.getElementById("getusersbutton").addEventListener("click", function() {
    getUsers();
});

document.getElementById("buttongetuserfromid").addEventListener("click", function(){
    var id = document.getElementById("idinput").value;
    getUser(id);
});

// Could maybe be refactored into more methods
document.getElementById("adduserbtn").addEventListener("click", function() {
    var _age = document.getElementById("inputage").value;
    var _name = document.getElementById("inputname").value;
    var _gender;
    if(document.getElementById("r1").checked) {
        _gender = "male";
    } else {
        _gender = "female";
    }
    var _email = document.getElementById("inputemail").value;

    var options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: _age,
            name: _name,
            gender: _gender,
            email: _email
        })
    }
    fetch("http://localhost:3333/api/users/", options);
});

// A lazy solution for update
document.getElementById("updateuserbtn").addEventListener("click", function() {
    var _age = document.getElementById("inputage").value;
    var _name = document.getElementById("inputname").value;
    var _gender;
    if(document.getElementById("r1").checked) {
        _gender = "male";
    } else {
        _gender = "female";
    }
    var _email = document.getElementById("inputemail").value;
    var id = document.getElementById("updateid").value;

    var options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            age: _age,
            name: _name,
            gender: _gender,
            email: _email
        })
    }
    fetch("http://localhost:3333/api/users/" + id, options);
});