// function reverseString(str) {
// 	return str
// 	.split('')
// 	.reverse()
// 	.join('');
// }

// console.log(reverseString("celeste"));
// console.log(reverseString("word"));
// console.log(reverseString("utto"));

function highAndLow(numbers) {

	const splitted = numbers.split(' ').map(Number);
	
	let min = Infinity;
	let max = -Infinity;

	splitted.forEach(element => {
		if (num < min) {
			min = num;
		}
		if (num > max) {
			max = num;
		}
	});

	return `${max} ${min}`;

}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));