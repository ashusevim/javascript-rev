function fetchProducts() {
	console.log("Fetching products...");
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 1, name: "Laptop", category: "Electronics", price: 1200 },
				{ id: 2, name: "Coffee Mug", category: "Kitchen", price: 25 },
				{
					id: 3,
					name: "Smartphone",
					category: "Electronics",
					price: 800,
				},
				{ id: 4, name: "Bookshelf", category: "Furniture", price: 150 },
				{
					id: 5,
					name: "Headphones",
					category: "Electronics",
					price: 200,
				},
			]);
		}, 1000);
	});
}

/**
 * GOAL: Write this async function
 * 1. Fetch the products
 * 2. Filter them to get ONLY "Electronics"
 * 3. Map the filtered array to a new array where each product's
 * price has a 10% increase. (price * 1.1)
 * 4. Log the final array of new, updated electronics.
 */
async function getUpdatedElectronics() {
	const products = await fetchProducts();
	const updatedProducts = products
		.filter((product) => product.category === "Electronics")
		.map(product => {
			// return a new object
			return {
				...product,
				price: product.price * 1.1
			}
		})

	console.log(updatedProducts);
}

getUpdatedElectronics();
