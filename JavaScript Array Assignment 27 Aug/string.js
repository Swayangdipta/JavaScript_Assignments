// Assignment 4

const checkIfWordPresent = (word,sentence) => {
    return sentence.includes(word);
}

let word = "with";
let sentence = "You cannot end a sentence with because because because is a conjunction";

console.log(checkIfWordPresent(word,sentence));

// Assignment 5

let str = "swayangdipta";
let strArray = str.split("");
console.log(strArray);

// Assignment 6

let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let strArray = str.split(", ");
console.log(strArray);

// Assignment 7

let str = "You cannot end a sentence with because because because is a conjunction";
console.log(str.lastIndexOf("because"));

// Assignment 8

let str = "You cannot end a sentence with because because because is a conjunction";
console.log(str.search("because"));

// Assignment 9

let str = " Swayandipta Das ";
console.log(str.trim());