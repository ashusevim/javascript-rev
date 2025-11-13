class User{
	constructor(name, age){
		this.name = name
		this.age = age
	}

	greet(){
		console.log(`My name is ${this.name} and am ${this.age} years old`)
	}
}

class Admin extends User{
	editWebsite(){
		console.log(`${this.name} is editing the website`)
	}
}

const newAdmin = new Admin("Ashish", 21)
newAdmin.greet()
newAdmin.editWebsite()
