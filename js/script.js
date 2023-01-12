const input = document.querySelector("input");
const btn = document.querySelector("button");

document.querySelector('.main-Details').style.display = 'none';

const t = Date.now();
console.log(t);


btn.addEventListener("click", async () => {
	console.log(input.value);
	const cityName = input.value;
	const serverUrl = "http://api.openweathermap.org/data/2.5/";
	const apiKey = "dd104ede60c26d64cf20852b80b4317d";
	const url = `${serverUrl}weather?q=${cityName}&appid=${apiKey}`;
	
	const data = await getData(url);
	
	console.log(data);
	document.querySelector('.package-name').textContent = data.name;
	document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;";
	document.querySelector(".disclaimer").textContent = `Weather: ${data.weather[0]["description"]}`;
	document.querySelector(".features li").innerHTML =
		`<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
	
	
	console.log(data.sys.sunrise);
	console.log(data.sys.sunset);
	const sunrise = JSON.parse(data.sys.sunrise);
	console.log(sunrise);
	console.log(getTime(sunrise));
	
	document.querySelector('.package-name-details').textContent = `City/town: ${data.name}`;
	document.querySelector(".price-details").innerHTML = `Temperature: ${Math.round(data.main.temp - 273)} &deg;`;
	document.querySelector('.price-feels').innerHTML = `Feels like: ${Math.round(data.main.feels_like - 273)} &deg;`
	document.querySelector('.disclaimer-sunrise').textContent = `Sunrise: ${getTime(data.sys.sunrise)}`;
	document.querySelector('.disclaimer-sunset').textContent = `Sunset: ${getTime(data.sys.sunset)}`;
	
	
	input.value = "";
	
});

const now = document.querySelector('.now');
const details = document.querySelector('.details');

now.addEventListener('click', () => {
	
	if(!now.classList.contains('active')) {
		now.classList.add('active');
		details.classList.remove('active');
	} else {
		return;
	}
	document.querySelector('.main-Details').style.display = 'none';
	document.querySelector('.main-Now').style.display = 'block';
	
})

details.addEventListener('click', () => {
	
	if(!details.classList.contains('active')) {
		details.classList.add('active');
		now.classList.remove('active');
	} else {
		return;
	}
	document.querySelector('.main-Now').style.display = 'none';
	document.querySelector('.main-Details').style.display = 'block';
	
})