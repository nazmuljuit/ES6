//Arguments vs. Parameters
//Sometimes, you can use the terms argument and parameter interchangeably. However, by definition, parameters are what you specify in the function declaration whereas the arguments are what you pass into the function.
function add(x, y) {
    console.log(x+y);
    return x + y;
 }
 
 add(100,200);

 //Setting JavaScript default parameters for a function

 function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'
 