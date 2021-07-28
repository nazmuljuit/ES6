console.clear();
//traditional function
function greetings(name)
{
    return `Welcome ${name}`;
}

//array function
const arrayGreetings = (name,age) => {
    return `Welcome array function ,${name} ${age}`;  
}

//another array function
const anotherGreetings = name => {
    return `Welcome another greeting ${name}`
}

//short array function
const shortGreetings = name =>  `Welcome short greeting ,${name}` 


console.log(greetings('Nazmul Hossain'));
console.log(arrayGreetings('Nazmul Hossain',36));
console.log(anotherGreetings('Nazmul Hossain'));
console.log(shortGreetings('Nazmul Hossain'));