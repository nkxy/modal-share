// to store the number of lanes allocated for each of the different 
// modal shares. (The data has already been processed)

class City {
	constructor(walk, cycle, public, cars) {
		// want to split them up into 10 seperate lanes, through 
		// rounding. 
		var c = Math.round(cars/10);
		var p = Math.round(public/10)
		var y = Math.round(cycle/10);
		var w = Math.round(walk/10);

		var total = c + p + y + w;
		if (total < 10 ) {
			// adding to the number of cars. 
			for (int i = total; i < 10; ++i) {
				++c;
			}
		} else if (total > 10) {
			// subtracting from the number of cars. 
			for (int i = total; i > 10; --i) {
				--c;
			}
		}

		if (c < 0) {
			throw "negative lanes-incorrect numbers given";
		}

		this.cars = c;
		this.public = p;
		this.cycle = y;
		this.walk = w;
	}
}

// constants that will be put into the array 
const Ottawa = new City(8,2,18,72);
const Montreal = new City(5,2,33,70);

// database of city arrays. 
const db = {Ottawa, Montreal}

// NameEquals checks to see if the name 
// of the city given equals the one 
// we are searching for. 
function NameEquals (name) {
	return name == this;
}

// AllocateLanes(city) allocates the 
// lanes in the road, based on the numbers
// given by city. 
function AllocateLanes (city) {
	var curlane = 0; 
	var cycle = city.cycle;
	var public = city.public;
	var cars = city.cars;
	var walk = city.walk; 
	while (cycle > 0) {
		--cycle;
		// update the lane 
	}
	while (public > 0) {
		--public;
		// update the lane 
	}
	while (cars > 0) {
		--cars;
		// update the lane 
	}
	while (walk > 0) {
		--walk;
		// update the lane 
	}
}


// main function that is given the name that the 
// user inputs, checks to see if it exists in the 
// database, and if it does, then it changes the 
// lane display. 
function ChangeCity (nameInput) {
	var City = db.find(NameEquals, nameInput);
	if (City != undefined) {
		AllocateLane(City)
	} else {
		// change this to show the user later. 
		console.log("No city found")
	}
}

