import 'bootstrap/dist/css/bootstrap.css'
/*import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementsByName("buttonjoke").addEventListener("click", function() {
    var id = document.getElementsByName("jokeid").innerHTML.value;
    document.getElementById("joke").innerHTML = jokes.getJokeById(id);
});

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
}); */

document.getElementById("north").addEventListener("click", function(){
    alert("north")
}, false);

document.getElementById("south").addEventListener("click", function(){
    alert("south")
}, false);

document.getElementById("west").addEventListener("click", function(){
    alert("west")
}, false);

document.getElementById("east").addEventListener("click", function(){
    alert("east")
}, false);