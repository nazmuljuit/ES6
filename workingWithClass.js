class Person
{
	constructor(name,birthYear)
	{
		this.name = name;
		this.yearOfBirth = birthYear;

	}

	getDetails = () => 
	{
		return `Name:${this.name} and Age:${2021 - this.yearOfBirth}`;

	}
}

var nazmul =new Person('Nazmul',1989);
console.log(nazmul.getDetails());
