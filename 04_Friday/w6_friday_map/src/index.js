import 'bootstrap/dist/css/bootstrap.css'

//http://restcountries.eu/rest/v1/alpha?codes=de

var lastcountryclicked = null;

document.getElementById("svg2").addEventListener("click", function() {
    var id = event.target.id;
    testGetCountry(id);
    document.getElementById(id).style.fill="red";

    if(lastcountryclicked != null && lastcountryclicked != id) {
        document.getElementById(lastcountryclicked).style.fill="#c0c0c0";
    }
    lastcountryclicked = id;
});

var table = "<tr><th>Name</th><th>Population</th><th>Area</th>" +
                "<th>Borders</th></tr>";

function testGetCountry(id) {
    var url = "http://restcountries.eu/rest/v1/alpha?codes=" + id;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById("table").innerHTML = toHtml(data);
        });
}

function toHtml(array) {
    var user = array.map(item => "<tr><td>" + item.name + "</td><td>"
            + item.population + "</td><td>"
            + item.area + "</td><td>"
            + item.borders + "</td></tr>").join("");

    return table + user;
}