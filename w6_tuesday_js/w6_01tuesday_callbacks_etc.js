var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var num = [1, 3, 5, 10, 11];
var names1 = [{ name: "Lars", phone: "1234567" },
{ name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" },
{ name: "Bo", phone: "79345" }];

//1 -----------------------------------

var onlyA = names.filter(function (name) {
    return name.includes("a");
});

var reversed = names.map(function (name) {
    return name.split("").reverse().join("");
});

//2 -----------------------------------
//a
function myFilter(array, callback) {
    var res = [];
    for (let elem of array) {
        if (callback(elem)) {
            res.push(elem);
        }
    }
    return res;
}

var testMyFilter = myFilter(names, function (name) {
    return name.includes("a");
});

//b 
function myMap(array, callback) {
    var res = [];
    for (let elem of array) {
        res.push(callback(elem));
    }
    return res;
}

var testMyMap = myMap(names, function (name) {
    return name.split("").reverse().join("");
});

//3 -----------------------------------
Array.prototype.myMapProp = function myMapProp(callback) {
    var res = [];
    for (let elem of this) {
        res.push(callback(elem));
    }
    return res;
}

Array.prototype.myFilterProp = function myFilterProp(callback) {
    var res = [];
    for (let elem of this) {
        if (callback(elem)) {
            res.push(elem);
        }
    }
    return res;
}

//4 -----------------------------------
//a
var num1 = num.map(function (value, index) {
    if (num[index + 1] == null) {
        return value;
    }
    return value + num[index + 1];
});

//b
function toHtml(array) {
    var res = array.map(function (name) {
        return "<a href=\"\">" + name + "</a>";
    });
    res.unshift("<nav>");
    res.push("</nav>");
    return res.join("");
}

//c
function htmlT(array) {
    var res = ["<table><tr><th>name</th><th>phone</th></tr>"];
    array.map(function (name) {
        res.push("<tr><td>" + Object.values(name)[0] + "</td><td>" + Object.values(name)[1] + "</td></tr>")
    });
    res.push("</table>");
    return res.join("");
}

function testOnHtml() {
    document.getElementById("test").innerHTML = htmlT(names1);
    document.getElementById("test1").innerHTML = toHtml(names);
}


//5 -----------------------------------
//a
var all = ["Lars", "Peter", "Jan", "Bo"];
var comma = all.join();
var space = all.join(" ");
var hashtag = all.join("#");

//b
var numbers = [2, 3, 67, 33];
var sum = numbers.reduce(function (total, num) {
    return total += num;
});

//c
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];

// Accumolator -> sums the given value
// Member -> {name: "Peter", age : 18}
// Index -> Index in Member 
// Array -> The given array (members in this case)
// Not entirely what the assignment was about, but couldn't get it to work in other ways.
function avgAge(array) {
    var acc = members.reduce((acc, member) =>
        acc + member.age, 0
    );
    return acc/array.length;
}

//d - not finished
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

function countVotes(array) {
    var count = {};
    array.reduce(function (array, elem) {
        if (array[Object.value()]) {

        } else {
            count[Object.value()] = 1;
        }
    });
}






/*console.log("only a: " + onlyA);
console.log("reversed: " + reversed);
console.log("myFilter: " + testMyFilter);
console.log("myMap: " + testMyMap);
console.log("map number: " + num1);
console.log("to a html: " + toHtml(names));
console.log("to table html:" + htmlT(names1));
console.log(comma + space + hashtag);
console.log(sum);*/