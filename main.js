function ChangeCity (name) {
	var city = CreateLanes(name);
}

// returns a city object that contains all 
// of the 
function CreateLanes(name) {
	if (name == Vancouver) {
		return new City(7,2,20,69);
	} else if (name == Ottawa) {
		return new City(8,2,18,72);
	} else if (name == Toronto) {
		return new City(5,1,24,68);
	}
}


// to store the number of lanes allocated for each of the different 
// modal shares. 

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

		this.cars = c;
		this.public = p;
		this.cycle = y;
		this.walk = w;
	}
}

