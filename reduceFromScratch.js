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


const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 24 },
  { name: "Charlie", age: 28 },
  { name: "Diana", age: 35 }
];

const sumAges = people.reduce((acc, person) => acc + person.age, 0);

console.log(sumAges / people.length);

// function reduceFromScratch(array, callback, initialValue) {

// 	let accumulator = initialValue;

// 	for (let i = 0; i < array.length; i++) {
// 		const element = array[i];
// 		accumulator = callback(accumulator, element, i);
// 	}

// 	return accumulator;

// }

// function getAvarageAges(totalAge, arrayLength) {

//     return totalAge / arrayLength;

// }

// function sumAges(acc, person) {
//     return acc + person.age;
// }

// console.log(getAvarageAges(reduceFromScratch(people, sumAges, 0), people.length));


const books = [
  { title: "1984", pages: 328 },
  { title: "Il nome della rosa", pages: 512 },
  { title: "Il piccolo principe", pages: 96 },
  { title: "Siddhartha", pages: 152 }
];

const totalPages = books.reduce((acc, book) => acc + book.pages, 0);

console.log(totalPages);
