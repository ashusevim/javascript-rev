class User{
	constructor(name){
		this.name = name
	}
}

class Admin extends User{
	constructor(name, permissionLevel){
		super(name)
		this.permissionLevel = permissionLevel
	}
}

const admin = new Admin("Ashish", "full-access")
console.log(admin.name)
console.log(admin.permissionLevel)
