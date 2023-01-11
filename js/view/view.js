async function getData(url) {
	try {
		const response = await fetch(url);
		if(!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.log(error.message);
	}
}