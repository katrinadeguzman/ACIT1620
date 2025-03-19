let dogName = "Bobo";
let dogWeight = 20;
bark(dogName, dogWeight)

dogName = "Spot";
dogWeight = 13;
bark(dogName, dogWeight)

dogName = "Spike";
dogWeight = 53;
bark(dogName, dogWeight)

dogName = "Chonky";
dogWeight = 73;
bark(dogName, dogWeight)

function bark(dogName, dogWeight) {
    if (dogWeight > 20) {
        console.log(dogName + " says WOOF WOOF");
    } else {
        console.log(dogName + " says woof woof");
    }
}

let x = 32;
let y = 44;
let radius = 5;

let centerX = 0;
let centerY = 0;
let width = 600;
let height = 400;

function setup(width, height) {
    centerX = width/2;
    centerY = height/2;
}

function computeDistance(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    let d2 = (dx * dx) + (dy * dy);
    let d = Math.sqrt(d2)
    return d;
}

function circleArea(r) {
    let area = Math.PI * r * r;
    return area;
}

setup(width, height);
let area = circleArea(radius)
let distance = computeDistance(x, y, centerX, centerY);

alert("Area: " + area);
alert("Distance: " + distance);

let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

// let i = 0;
// let highScore = 0;
// while (i < scores.length) {
//     console.log("#" + i + " score: " + scores[i]);
//     if (scores[i] >= highScore) {
//         highScore = scores[i];
//         console.log("Position: " + i + "!!");
//     }
//     i = i + 1;
// }
// console.log("Highest score: " + highScore);

// let bestSolutions = [];
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//         bestSolutions.push(i);
//     }
// }
// console.log("Highest score at positions: " + bes);


let highScore = 0;
for (let i = 0; i < scores.length; i++) {
    let output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Solutions with the highest score: " + bestSolutions);

let fiveSpaces = new Array(5) //[     ]
let five = Array.of(5) //[5]

five.push(4) //[5, 4]
five.pop() //[5]
five.unshift(4) //[4, 5]
five.shift() //[5]

five.indexOf(4) //-1 because not found, otherwise first index found
five.lastIndexOf(4)

five.includes(5) // true
five.splice(2, 0, 10, 20) //at index 2 remove 0 elements, then append 10, 20

five.concat([6]); //[5, 6]

let words = ["Hello", "World!"];
words.join(" "); //"Hello World!"

let sentence = "JavaScript so fun!";
let wordsArr = sentence.split(" "); //["JavaScript", "so", "fun!"]

let add = (a, b) => a + b; //single line = implicit return

let multiply = (a, b) => { //multi line, need curly brace
    console.log(`Multiplying ${a} and ${b}`)
    return a * b
}

const square = x => x * x;
square(6); //36

const greet = () => "Hello World!"; //if no parameters, use ()

let access = document.getElementById("code7");
let code = access.innerHTML;
code += "!!!";
alert(code);

function init() {
    let planet = document.getElementById("code2");
    planet.innerHTML = "Alert!!!"
    planet.setAttribute("class", "redtext");
}

window.onload = init;