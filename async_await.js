// Example function to demonstrate async/await
async function fetchData() {
	try {
		// Simulate an asynchronous operation (like API call)
		const response = await fetch("https://api.example.com/data");
		const data = await response.json();
		console.log("Data received:", data);
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error; // Re-throw the error if needed
	}
}

// Using the async function
async function processData() {
	try {
		const result = await fetchData();
		console.log("Processed result:", result);
	} catch (error) {
		console.error("Failed to process data:", error);
	}
}

// Call the async function
processData();
