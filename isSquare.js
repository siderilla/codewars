var isSquare = function(n){
	if (n < 0) {
		return false;
	} else if (n === 0) {
		return true;
	}
	let num = 1;
	while (num <= n) {
		if (n / num === num) {
			return true;
		}
		num++;
	}
	return false;
}

console.log(isSquare(-1));
console.log(isSquare(25));
console.log(isSquare(3));
console.log(isSquare(0));


// BEST WAY

// function isSquare(n) {
// 	return Math.sqrt(n) % 1 === 0;
//   }