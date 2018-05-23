// helper function for onsubmit method that allocates the lanes
// in the road, based on the numbers given by city. 
function AllocateLanes (city) {
	var curlane = 1; 
	var cycle = city.cycle;
	var bus = city.bus;
	var cars = city.cars;
	var walk = city.walk; 
	while (cycle > 0) {
		--cycle;
		document.getElementById(curlane).src = "./images/final/cycle.png";
		document.getElementById(curlane).style= "";
		console.log("cycle");
		++curlane;
	}
	while (bus > 0) {
		--bus;
		document.getElementById(curlane).src = "./images/final/bus.png";
		document.getElementById(curlane).style= "";
		console.log("bus");
		++curlane;
	}
	while (cars > 0) {
		--cars;
		document.getElementById(curlane).src = "./images/final/car.png";
		document.getElementById(curlane).style= "";
		console.log("cars");
		++curlane;
	}
	while (walk > 0) {
		--walk;
		document.getElementById(curlane).src = "./images/final/walk.png";
		document.getElementById(curlane).style= "width: 1%";
		console.log("walk");
		++curlane;
	}
}

// Helper function used by the onsubmit method,
// while looking through the database.
function NameEquals (current_name) {
	return this.toUpperCase() == current_name.city_name.toUpperCase();
}

// taking form elements from the html to submit city name. 
var form = document.getElementById('city-form');
var input = document.getElementById('form-box');

// take the city name submitted by user, checks to see if 
// it exists, and then updates the road accordingly. 
form.onsubmit = function () {
	console.log("called change city");
	const nameInput = input.value;
	var City = db.find(NameEquals, nameInput);
	if (City != undefined) {
		document.getElementById("alert").innerHTML = "";
		document.getElementById("city-title").innerHTML = City.city_name;
		AllocateLanes(City);
	} else {
		document.getElementById("alert").innerHTML = "That city's data does not exist.";
		console.log("No city found");
	}
	return false;
}
