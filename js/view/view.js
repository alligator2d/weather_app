async function getData(url) {
	try {
		const response = await fetch(url);
		if(!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.log(error.message);
		document.querySelector('input').value = 'Incorrect city name =(';
	}
}

function getTime(res) {
	let hours = Math.floor(res / (1000 * 60 * 60) % 24);
	let minutes = Math.floor((res / 1000 / 60) % 60);
	
	return `${hours}:${minutes}`;
}


function createElem(city17) {
	const elem = document.createElement("div");
	const deleteBtn = document.createElement("button");
	
	elem.className = "list";
	elem.innerText = city17;
	
	deleteBtn.innerText = "x";
	deleteBtn.classList.add("delete");
	elem.appendChild(deleteBtn);
	
	document.querySelector(".add").append(elem);
}



function createWeather(data) {
	console.log(data);
	document.querySelector(".package-name").textContent = data.name;
	document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;";
	document.querySelector(".disclaimer").textContent = `Weather: ${data.weather[0]["description"]}`;
	document.querySelector(".features li").innerHTML =
		`<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
	document.querySelector(".package-name-details").textContent = `City/town: ${data.name}`;
	document.querySelector(".price-details").innerHTML = `Temperature: ${Math.round(data.main.temp - 273)} &deg;`;
	document.querySelector(".price-feels").innerHTML = `Feels like: ${Math.round(data.main.feels_like - 273)} &deg;`;
	document.querySelector(".disclaimer-sunrise").textContent = `Sunrise: ${getTime(data.sys.sunrise)}`;
	document.querySelector(".disclaimer-sunset").textContent = `Sunset: ${getTime(data.sys.sunset)}`;
	
}

async function checkEnter(e) {
	const input = document.querySelector("input");
	
	if(e.key === "Enter" && input.value !== "") {
		const cityName = input.value;
		const serverUrl = "http://api.openweathermap.org/data/2.5/";
		const apiKey = "dd104ede60c26d64cf20852b80b4317d";
		const url = `${serverUrl}weather?q=${cityName}&appid=${apiKey}`;
		const data = await getData(url);
		createWeather(data);
	}
}

function getFromLocalStorage() {
	if(localStorage.getItem("list")) {
		const localStorageItems = JSON.parse(localStorage.getItem("list"));
		
		createElem(localStorageItems);
		// localStorageItems.forEach(i => createWeather(i));
	}
}

function setToLocalStorage(city17) {
	localStorage.setItem("list", JSON.stringify(city17));
}

const deleteBtn = document.querySelector('.delete');

if(deleteBtn) {
	deleteBtn.addEventListener("click", () => {
		deleteElem();
	});
}

function deleteElem() {
	localStorage.clear();
}