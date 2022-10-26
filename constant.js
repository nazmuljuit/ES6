let a = 5;
a = 30;
a = a + 7;
console.log(a); // 37

// constant can not declare more than one
const VAT = 0.3;
//VAT = 0.9; // TypeError

//const RED; // SyntaxError


//javascript constant and object
//The const keyword ensures that the variable it creates is read-only. However, it doesn’t mean that the actual value to which the const variable reference is immutable. For example:
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

//person = { age: 40 }; // TypeError
const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

//colors = []; // TypeError
