/*
1. An API function: this function returns a promise that resolves with a list of users. we have to `await` it

GOAL: write an async function that:
1. fetches the users
2. uses an array method to filter the list down to only users older than 30
3. logs the resulting array of names
*/

function fetchUsers() {
	console.log("fetching users...");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ name: "Alex", age: 28 },
				{ name: "Maria", age: 42 },
				{ name: "Sam", age: 19 },
				{ name: "Ben", age: 35 },
			]);
		}, 1000); // Simulates 1-second network delay
	});
}

// 1. How do you get the users from fetchUsers()?
// 2. How do you filter the users array?
// 3. How do you log the result?
async function findUsers() {
	// stop here and get the all the users
	const allUsers = await fetchUsers();
	
	const filteredUsers = await allUsers
		// filter to get the item you want.
		.filter((user) => user.age > 30)
		// map to transform those items into required shape you want.
		.map((user) => user.name);
	console.log(filteredUsers)
}

findUsers();
