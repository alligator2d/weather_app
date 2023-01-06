const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', search);

function search () {
	console.log(input.value);
	input.value = '';
}