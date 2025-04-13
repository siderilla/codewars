function firstNonConsecutive(arr) {
	if (arr.length < 2) {
		return null;
	}

	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let previous = arr[i - 1];

		if (current - previous !== 1) {
			return current;
		}
	}

	return null;
}


console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
