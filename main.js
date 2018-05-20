// html object elemnts to be used for the ChangeCity 
// function
var form = document.getElementById('city-form');
var input = document.getElementById('form-box');

// to store the number of lanes allocated for each of the different 
// modal shares. (The data has already been processed)

class City {
	constructor(city_name, walk, cycle, bus, cars) {
		// want to split them up into 10 seperate lanes, through 
		// rounding. 
		var c = Math.round(cars/10);
		var p = Math.round(bus/10)
		var y = Math.round(cycle/10);
		var w = Math.round(walk/10);

		var total = c + p + y + w;
		if (total < 10 ) {
			// adding to the number of cars. 
			for (var i = total; i < 10; ++i) {
				++c;
			}
		} else if (total > 10) {
			// subtracting from the number of cars. 
			for (var i = total; i > 10; --i) {
				--c;
			}
		}

		if (c < 0) {
			throw "negative lanes-incorrect numbers given";
		}
		console.log("made class");
		this.cars = c;
		this.bus = p;
		this.cycle = y;
		this.walk = w;
		this.city_name = city_name; 
	}
}

// database of city arrays. 
const db = [new City("Ottawa",8,2,18,72),new City("Montreal",5,2,33,70), 
new City("Adelaide",3,1,11,85), new City("Atlanta",1,0,3,86), new City("Athens",8,2,37,53),
new City("Auckland",4,1,9,85), new City("Baltimore",3,0,7,84), new City("Barcelona",32,2,39,27),
new City("Beijing",21,32,26,21), new City("Belgrade",23,1,49,27), new City("Berlin",29,15,26,30),
new City("Brisbane",4,1,14,81), new City("Brussels",25,2.5,28,43), new City("Bogota",15,2,64,19), 
new City("Boston",5,1,14,73), new City("Budapest",32,1,47,20), new City("Calgary",4.7,1.5,14.4,79.4),
new City("Chicago",3,1,13,77), new City("Dallas",1,0,2,90), new City("Daejeon",26,2,28,44),
new City("Delhi",21,12,48,19), new City("Detroit",1,0,2,92), new City("Edmonton",3.7,1,11.3,84),
new City("Hamburg",28,12,18,42), new City("Houston",1,0,2,91), new City("Indianapolis",1,0,4,90),
new City("Las Vegas",1,0,4,90), new City("London",21,2,44,34), new City("Los Angeles",3,1,5,85),
new City("Madrid",36,0,34,30), new City("Melbourne",4,2,19,76), new City("Miami",2,1,4,87),
new City("Milan",17,6,41,36), new City("Minsk",13,1,63,20), new City("Mumbai",27,6,52,15),
new City("New York",6,1,33,55), new City("Osaka",27,0,34,39), new City("Paris",15,5,59,20),
new City("Perth",3,1,12,84), new City("Philadelphia",4,1,10,80), new City("Phoenix",2,1,2,87),
new City("Portland",3,3,7,78), new City("Prague",23,1,43,33), new City("Rome",4,1,29,66), 
new City("San Antonio",2,0,3,90), new City("San Diego",3,1,3,85), new City("San Francisco",5,2,20,64),
new City("San Jose",2,2,5,84), new City("Seattle",4,1,10,77), new City("Shanghai",27,20,33,20),
new City("Singapore",22,1,44,33), new City("Sydney",5,1,27,67), new City("Taipei",15,4,33,48),
new City("Tokyo",23,14,51,12), new City("Toronto",5,1,24,68), new City("Vancouver",7,2,20,69),
new City("Vienna",26,7,39,28), new City("Warsaw",18,3,47,32), new City("Washington DC",4,1,16,72)];

// NameEquals checks to see if the name 
// of the city given equals the one 
// we are searching for. 
function NameEquals (current_name) {
	return this.toUpperCase() == current_name.city_name.toUpperCase();
}

 
// AllocateLanes(city) allocates the 
// lanes in the road, based on the numbers
// given by city. 
function AllocateLanes (city) {
	var curlane = 1; 
	var cycle = city.cycle;
	var bus = city.bus;
	var cars = city.cars;
	var walk = city.walk; 
	while (cycle > 0) {
		--cycle;
		document.getElementById(curlane).src = "./images/final/cycle.png";
		console.log("cycle");
		++curlane;
	}
	while (bus > 0) {
		--bus;
		document.getElementById(curlane).src = "./images/final/bus.png";
		console.log("bus");
		// update the lane 
		++curlane;
	}
	while (cars > 0) {
		--cars;
		document.getElementById(curlane).src = "./images/final/car.png";
		console.log("cars");
		// update the lane 
		++curlane;
	}
	while (walk > 0) {
		--walk;
		document.getElementById(curlane).src = "./images/final/walk.png";
		document.getElementById(curlane).style= "width: 1%";
		console.log("walk");
		// update the lane 
		++curlane;
	}
}


// main function that is given the name that the 
// user inputs, checks to see if it exists in the 
// database, and if it does, then it changes the 
// lane display. 
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
