export function minBy(array, cb) {
	let personAge = array[0];
	for (let element of array) {
		if (cb(element) < personAge.age) {
		  return element;
    }
	}	
}

export function maxBy(array, cb) {
	let personAge = array[0];
	for (let element of array) {
		if (cb(element) > cb(personAge)){
		  return element;
    }
	}	
}
