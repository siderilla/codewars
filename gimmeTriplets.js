function gimme(triplet) {
	if (triplet.length === 3) {
		for (let i = 0; i < triplet.length; i++) {
			if (triplet[2] > triplet[0]) {
				console.log("true");
			} else {
				console.log("false");
			}
		}
	} else {
		console.error("the array does not contain three elements");
	}

}

console.log(gimme([2, 1, 3]));
console.log(gimme([1]));