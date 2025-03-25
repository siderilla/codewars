// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example (Input => Output):

// 35231 => [1,3,2,5,3]
// 0     => [0]



function digitize(n) {
let digitToReverse = [];
let stringifyDigits = n.toString();
for (let i = 0; i < stringifyDigits.length; i++) {
	const digit = stringifyDigits[i];
	digitToReverse.push(digit);
	}
	let reversedDigits = digitToReverse.reverse();
    return reversedDigits.map(digit => parseInt(digit));
}
  
console.log(digitize(54364));



//// BEST PRACTICE
// function digitize(n) {
// 	return String(n).split('').map(Number).reverse()
//   }