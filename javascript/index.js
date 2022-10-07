setInterval(function(){
	// Los Angeles
	let losAngeles = document.getElementById('los-angeles')
	losAngeles.querySelector('.time').innerHTML = moment().tz('America/Los_Angeles').format('h:mm:ss A');
	losAngeles.querySelector('.date').innerHTML = moment().tz('America/Los_Angeles').format('MMMM Do YYYY');			

	// Paris
	let paris = document.getElementById('paris')
	paris.querySelector('.time').innerHTML = moment().tz('Europe/Paris').format('h:mm:ss A');
	paris.querySelector('.date').innerHTML = moment().tz('Europe/Paris').format('MMMM Do YYYY');

	// Tokyo
	let tokyo = document.getElementById('tokyo');
	let tokyoTime = moment().tz('Asia/Tokyo');
	tokyo.querySelector('.time').innerHTML = tokyoTime.format('h:mm:ss A');
	
	tokyo.querySelector('.date').innerHTML = tokyoTime.format('MMMM Do YYYY');

	// Sydney
	let sydney = document.getElementById('sydney');
	let sydneyTime = moment().tz('Australia/Sydney');
	sydney.querySelector('.time').innerHTML = sydneyTime.format('h:mm:ss A');
	sydney.querySelector('.date').innerHTML = sydneyTime.format('MMMM Do YYYY');
},1000);

function search(event) {
	let cities = document.querySelector('#cities');
	let value = event.target.value;
	if (event.target.value === 'current') {
		value = moment.tz.guess();
	} 

	if (value.length) {
		let searchTime = moment().tz(value);
		let city = value.split("/")[1].replace('_', ' ')
		let time = searchTime.format('h:mm:ss A');
		let date = searchTime.format('MMMM Do YYYY');;
		cities.innerHTML = `
		<div class="city">
			<div>					
				<h2>${city}</h2>
				<div class="date">${date}</div>
			</div>
			<div class="time">${time}</div>
		</div>
		`
	}
}

let select = document.getElementById("search");
select.addEventListener("change", search);