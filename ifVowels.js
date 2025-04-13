function getCount(str) {
	const newStr = str.toLowerCase()
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0

	for (let i = 0; i < newStr.length; i++) {
		const char = newStr[i];
		if (vowels.includes(char)) {
			count++;
		}
	}
	return count
}

console.log(getCount("ciao"));
