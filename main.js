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


