// filter() è un metodo iterativo che chiama una funzione callback 
// e restituisce un nuovo array costituito dagli elementi filtrati 
// dalla funzione callback

// function isBigEnough(array) {

// 	const newArray = [];

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		if (element >= 10)
// 		{
// 			newArray.push(element);
// 		}
// 	}

// 	return newArray;

// }


function filterFromScratch(array, callback) {

	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (callback(element)) {
			newArray.push(element);
		}
	}
	return newArray;
}

function isBigEnough(value) {
	return value >= 10;
}

console.log(filterFromScratch([2, 6, 10, 4, 13, 23], isBigEnough));
