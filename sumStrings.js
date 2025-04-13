function sumStr(a, b) {
	if (a === "") {
		a = "0"
	} 
	if (b === "") {
		b = "0"
	}
	let x = parseInt(a)
	let y = parseInt(b)
	let sum = x + y
	return sum.toString();
}

console.log(sumStr("", "5"));
