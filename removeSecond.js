let arr = ['Hello', 'Hello Again', 1, 3, 5, 7, 9]


function removeEveryOther(arr) {
	let newArray = []

	for (let i = 0; i < arr.length; i++) {

		if (i % 2 === 0) {
			newArray.push(arr[i])
		}
	}

	return newArray
}


console.log(removeEveryOther(arr));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

