// run browserify main.js -o bundle.js after updating

let Phrase = require("mgj-palindrome");
let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string);
if (phrase.palindrome()) {
    alert(`"${phrase.content} is a palindrome!`);
} else {
    alert(`"${phrase.content} is not a palindrome!`)
}
