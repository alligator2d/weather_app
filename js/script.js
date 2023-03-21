require('dotenv').config()

window.addEventListener('DOMContentLoaded',function () {
	let list = [];
	const input = document.querySelector("input");
	const btn = document.querySelector("button");
	document.querySelector('.main-Details').style.display = 'none';
	getFromLocalStorage(list);
	input.onkeydown = checkEnter;
	
	btn.addEventListener("click", async () => {
		const cityName = input.value;
		const apiKey = process.env.API_KEY;
		const serverUrl = "https://api.openweathermap.org/data/2.5/";
		const url = `${serverUrl}weather?q=${cityName}&appid=${apiKey}`;
		const data = await getData(url);
		createWeather(data);
		
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
	
	const like = document.querySelector('.like');
	
	like.addEventListener('click', () => {
		createElem(input.value);
		list.push(input.value);
		setToLocalStorage(list);
		input.value = '';
		
	})
	
	
})

