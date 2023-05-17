//  Assignment 13
// Works only in browser
let base = prompt("Eneter base value: ",1);
let height = prompt("Enter height value: ",1);

let area = 0.5 * base * height;
console.log("The area is: "+area);

// Assignment 14

const findSlope = (val1,val2) => {
    let slope = (val2[1] - val1[1]) / (val2[0] - val1[0]);
    console.log("Solpe is: "+slope);
}

findSlope([2,2],[6,10]);

// Assignment 16
let radius = prompt("Enter the radius: ",1);
const PI = 3.14;
let area = PI * (radius * radius);
let curcumference = 2 * PI * radius;

console.log("Area is: "+area+" and circumference is: "+curcumference);