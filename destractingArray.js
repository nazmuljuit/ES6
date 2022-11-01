function getScores() {
    return [70, 80, 90];
 }

 let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
// Third will be undefined 
function getRuns() {
    return [70, 80];
 }
 
 let [a, b, c] = getRuns();
 
 console.log(a); // 70
 console.log(b); // 80
 console.log(c); // undefined

 // for more element

 function getMarks() {
    return [70, 80, 90, 100];
 }
 
 let [m, n, o] = getMarks();
 
 console.log(m); // 70
 console.log(n); // 80
 console.log(o); // 90
 //Array Destructuring Assignment and Rest syntax
 let [p, q ,...args] = getMarks();
console.log(p); // 70
console.log(q); // 80
console.log(args); // [90, 100]

//separate variables

let d, f;
[d, f] = [10, 20];
console.log(d); // 10
console.log(f); // 20

//setting defaul value
function getItems() {
    return [10, 20];
}
let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;

console.log(thirdItem); // 0

let [, , thirdValue = 0] = getItems();

console.log(thirdValue); // 0
//If the value taken from the array is undefined, you can assign the variable a default value, like this:
let i, j;
[i = 1, j = 2] = [10];
console.log(i); // 10
console.log(j); // 2

//A typical way to solve this is to fallback the returned value of the getItems() function to an empty array like this:
function getTargets() {
    return null;
}

let [r = 10, s = 20] = getTargets() || [];

console.log(r); // 10
console.log(s); // 20

//Nested array destructuring
function getProfile() {
    return [
        'John',
        'Doe',
        ['Red', 'Green', 'Blue']
    ];
}


let [
    firstName,
    lastName,
    [
        color1,
        color2,
        color3
    ]
] = getProfile();

console.log(color1, color2, color3); // Red Green Blue

//Array Destructuring Assignment Applications
//1) Swapping variables
let u = 10, 
    v = 20;

[u, v] = [v, u];

console.log(u); // 20
console.log(v); // 10

//2) Functions that return multiple values

function stat(g, h) {
    return [
        g + h,
        (g + h) / 2,
        g - h
    ]
}

let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30, 15, 10