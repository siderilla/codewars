function petals(arr, n) {
	while (n > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (i == arr.length) {
				i == arr[0];
			}
			const element = arr[i];
			n--;
			if (n == 0) {
				return element;
			}
		}
	}
}

console.log(petals(["I love you", "a little", "a lot", "passionately", "madly", "not at all"], 8));

function howMuchILoveYou(nbPetals) {
	const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
	while (nbPetals > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (i == arr.length) {
				i == arr[0];
			}
			const element = arr[i];
			nbPetals--;
			if (nbPetals == 0) {
				return element;
			}
		}
	}
}
