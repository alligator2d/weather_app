const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
	console.log(input.value);
	const cityName = input.value;
	const serverUrl = "http://api.openweathermap.org/data/2.5/";
	const apiKey = "dd104ede60c26d64cf20852b80b4317d";
	const url = `${serverUrl}find?q=${cityName}&appid=${apiKey}`;
	
	const data = await getData(url);
	console.log(data.name);
	document.querySelector('.package-name').textContent = data.name;
	// document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;";
	// document.querySelector(".disclaimer").textContent = data.weather[0]["description"];
	// document.querySelector(".features li").innerHTML =
	// 	`<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
	
	
	input.value = "";
	
});

function search() {
	fetch(`http://api.openweathermap.org/data/2.5/find?q=${input.value}&appid=dd104ede60c26d64cf20852b80b4317d`).then(function (resp) {
		return resp.json();
	}).then(function (data) {
		console.log(data);
		document.querySelector(".package-name").textContent = data.name;
		document.querySelector(".price").innerHTML = Math.round(data.main.temp - 273) + "&deg;";
		document.querySelector(".disclaimer").textContent = data.weather[0]["description"];
		//https://openweathermap.org/img/wn/02d@2x.png
		document.querySelector(".features li").innerHTML =
			`<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
	}).catch(function () {
		// catch any errors
	});
	
}