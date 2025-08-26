function remove(string) {
	let toArray = [];
	toArray = string.split('')
	if ((toArray[toArray.length - 1]) === '!') {
		let removed = toArray.pop()
	}
	return toArray.join('');
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));



// BEST WAYsss
//
// const remove = s => s.replace(/!$/, '');
//
// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }
//
// function remove(s){
//   return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
// }
//