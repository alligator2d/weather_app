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

function getTime(res) {
	let hours = Math.floor(res / (1000 * 60 * 60) % 24);
	let minutes = Math.floor((res / 1000 / 60) % 60);
	
	return `${hours}:${minutes}`
}

let t1 = new Date(1673527617);
let t2 = new Date(1673563824)
console.log(`${t1.getHours()}:${t1.getMinutes()}`);
console.log(`${t2.getHours()}:${t2.getMinutes()}`);

