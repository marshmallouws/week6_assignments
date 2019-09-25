import 'bootstrap/dist/css/bootstrap.css'
/*import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

//var id = document.getElementById("jokeid");

function getjokefromid(id) {
    var joke = jokes.getJokeById(id);
    
    document.getElementById("joke").innerHTML = joke;
}*/

function showJoke() {
    var url = "https://studypoints.info/jokes/api/jokes/period/hour";
    fetch(url)
        .then(res => res.json())
        .then(data => {
            var quote = data.joke;
            document.getElementById("somethingdiv").innerHTML = quote;
        });
}

document.getElementById("somethingbutton").addEventListener("click", function () {
    var v = setInterval(showJoke(), 3600000);
});

var north = document.getElementById("north");
var south = document.getElementById("south");
var east = document.getElementById("east");
var west = document.getElementById("west");
