function plural(n) {
	return n === 1 ? false : true;
}

console.log(plural(2));
console.log(plural(0.5));
console.log(plural(1));
console.log(plural(0));
console.log(plural(10));
console.log(plural(100));