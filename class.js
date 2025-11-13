class User{
	constructor(name, age){
		// this refer to the new object being created
		this.name = name;
		this.age = age;
	}

	greet(){
		console.log(`My name is ${this.name} and am ${this.age} years old`)
	}
}

// this is how we can create an object
const first = new User("Ben", 20);
const second = new User("John", 21);

// this is how we can objects and their methods
second.greet();
first.greet();
