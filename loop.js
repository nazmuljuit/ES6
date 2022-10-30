let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}


let lists = [80, 90, 70];

for (const li of lists) {
    console.log(li);
}

let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

//In-place object destructuring with for…of

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`); // 14

//Iterating over strings

let str = 'abc';
for (let c of str) {
    console.log(c);
}

//Iterating over Map objects

let allcolors = new Map();

allcolors.set('red', '#ff0000');
allcolors.set('green', '#00ff00');
allcolors.set('blue', '#0000ff');

for (let color of allcolors) {
    console.log(color);
}

//Iterating over set objects
let nums = new Set([1, 2, 3]);

for (let num of nums) {
    console.log(num);
}

//for...of vs. for...in

let scoresrun = [10,20,30];
scoresrun.message = 'Hi';

console.log("for...in:");
for (let score in scoresrun) {
  console.log(score); 
}

console.log('for...of:');
for (let score of scoresrun) {
  console.log(score);
}
