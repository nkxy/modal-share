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