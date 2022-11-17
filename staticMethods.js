//The following adds a static method called createAnonymous() to the Persons type:
//Pumpkin.createAnonymous = function (gender) {
 //   let name = gender == "male" ? "John Doe" : "Jane Doe";
 //   return new Pumpkin(name);
//};
//The createAnonymous() method is considered a static method because it doesn’t depend on any instance of the Person type for its property values.
//To call the createAnonymous() method, you use the Person type instead of its instances:
//var anonymouss = Pumpkin.createAnonymous();

//===============JavaScript static methods in ES6================
//In ES6, you define static methods using the static keyword. The following example defines a static method called createAnonymous() for the Person class:

class Pumpkin {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Jane Doe";
		return new Pumpkin(name);
	}
}

//To invoke the static method, you use the following syntax:

let anonymous = Pumpkin.createAnonymous("male");
console.log(anonymous);

//===================Calling a static method from the class constructor or an instance method===========

//To call a static method from a class constructor or an instance method, you use the class name, followed by the . and the static method:
className.staticMethodName();
//Alternatively, you can use the following syntax:
this.constructor.staticMethodName();
