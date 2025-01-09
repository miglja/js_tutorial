// Returns a URL-friendly version of a string
//     Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

function urlifyList(list) {
    return list.map(element => urlify(element));
}

function urlList(list) {
    return list.map(element =>
        "http://example.com/" + urlify(element));
}

function oneWordStates(list) {
    return list.filter(element =>
        element.split(/\s+/).length === 1);
}

function findDakotas_include(list) {
    return list.filter(element =>
        element.includes("Dakota"));
}

function findDakotas_regex(list) {
    return list.filter(element =>
        element.split(/\s+/).length === 2);
}

function stateLength(list) {
   return list.reduce((acc, element) => {
        acc[element] = element.length;
        return acc;
   }, {});
}

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

let newStates = urlifyList(states);
let stateURLs = urlList(states);

let compactStates = oneWordStates(states);

console.log(stateLength(states));

function mySum(list) {
    return list.reduce((acc, element) =>
        acc += element, 0,);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mySum(numbers))