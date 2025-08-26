function smallestInt(arr) {
	let smallest = Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}
	return smallest;
}

function findSmallestInt(arr) {
	return Math.min(...arr);
}

console.log(findSmallestInt([4, 3, 5, 2, 1]));
console.log(smallestInt([0]));