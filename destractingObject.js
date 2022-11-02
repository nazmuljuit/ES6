//in this tutorial, we’ll learn about JavaScript object destructuring which assigns properties of an object to individual variables.
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

//Setting default values
let customer = {
    customerName: 'Monir Hossain',
    customerAddress: 'Dhaka',
    currentAge: 28
};

let { customerName, customerAddress, customerMobile = '', currentAge: age = 18 } = customer;

console.log(customerMobile); // ''
console.log(age); // 28

//Destructuring a null object

function getPerson() {
    return null;
}
let { personName, personAge } = getPerson() || {};

//Nested object destructuring

let employee = {
    id: 1001,
    name: {
        fName: 'Monir',
        lName: 'Hossain'
    }
};

let {
    name: {
        fName,
        lName
    },
    name
} = employee;

console.log(fName); // John
console.log(lName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }

//Destructuring function arguments
let display = (studen) => console.log(`${studen.firstName} ${studen.lastName}`);

let studen = {
    firstName: 'John',
    lastName: 'Doe'
};

display(studen);