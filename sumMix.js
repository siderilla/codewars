function sumMix(mixNumbers) {
    let parsedNumbers = [];
    let sum = 0;
    for (let i = 0; i < mixNumbers.length; i++) {
        const element = mixNumbers[i];
        const parsedElement = parseInt(element);
        parsedNumbers.push(parsedElement);
        sum += parsedElement;
    }
    return { parsedNumbers, sum };
}

const result = sumMix([9, 3, '7', '3']);
console.log("Parsed Numbers:", result.parsedNumbers, "Sum:", result.sum);

/// BEST PRACTICE .map and .reduce
// function sumMix(mixNumbers) {
//     return mixNumbers.map(Number).reduce((acc, num) => acc + num, 0);
// }




/// studying arguments, params and functions

function test(a, b) {
	// arguments[0] = 10; // Modifica il primo argomento
	console.log(a); // Stampa 10, perché il parametro 'a' è sincronizzato con 'arguments[0]'
	console.log(b);
	return [a, b];
}
console.log("test1: " + test(5, 6));

function test2(a, b) {
	a = 20; // Modifica il parametro 'a'
	console.log(arguments[0]); // Stampa 20, perché l'oggetto arguments è sincronizzato
	return [a, b];
}
console.log("test2: " + JSON.stringify(test2(5, 6)));

function longestString() {
	let longest = "";
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i].length > longest.length) {
			longest = arguments[i];
		}
	}
	return longest;
}

console.log(longestString("icoaoaoa"));