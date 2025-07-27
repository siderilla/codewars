// reduce() è un metodo iterativo che SCORRE un array e costruisce un risultato finale
// pezzo per pezzo e ogni pezzo viene deciso da una funzione callback che riceve:
// 1. accumulator (contenitore dove salvi risultato progressivo e si aggiorna a ogni giro)
// 2. currentvalue (element/item è l'elemento attuale dell'array che si processa in quel momento del ciclo)
// la callback riceve questi due parametri e deve restituire un nuovo valore

// function reduceFromScratch(array, callback, initialValue) {

// 	let accumulator = initialValue;

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		accumulator = callback(accumulator, element);
// 	}

// 	return accumulator;

// }

// function sumAllElements(acc, el) {
// 	return acc + el;
// }

// function reduceFromScratch(array, callback, initialValue) {

// 	let accumulator = initialValue;

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		accumulator = callback(accumulator, element, i);
// 	}

// 	return accumulator;

// }

// function weightedSum(acc, currentValue, index) {
// 	return acc + (currentValue * index);
// }

// console.log(reduceFromScratch(([2, 4, 3, 5]), weightedSum, 0))

function reduceFromScratch(array, callback, initialValue) {

	let accumulator = initialValue;

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		accumulator = callback(accumulator, element, i);
	}

	return accumulator;

}

function getAvarageAge() {
	return acc +
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 28 },
  { name: "Diana", age: 35 }
];

console.log(getAverageAge(people));
