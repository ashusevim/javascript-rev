const user = {
	name: "Ashish Prajapati",
	greets: function(){
		console.log(this.name);
	}
}

user.greets();

// const newUser = user.greets.bind(user);
// newUser()
// const greet_one = user.greets.call(user);
// user.greets.apply(user);
// greet_one()

// newOb = user.greets.apply(user)
// console.log(newOb)
