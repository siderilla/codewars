// function disemvowel(str) {
// 	let newStr = '';
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	console.log("Empty str: ", newStr, "Array of vowels: ", vowels)
// 	for (let j = 0; j < str.length; j++) {
// 		const s = str[j];
// 		console.log(j);
// 		if (!vowels.includes(s.toLowerCase())) {
// 			newStr += s;
// 		}
// 	}
// 	return newStr;
// }

function isVowel(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	return str
	.split('') // splitta una stringa in un array 
	.filter(c => !vowels.includes(c.toLowerCase())) // filtra le vocali "per ogni c di str restituisci in un nuovo array tutti i c (che prima converti in lowercase) diversi dalle vocali"
	.join('') // rejoina tutti i c filtrati in un unica stringa
}

console.log(disemvowel("HellO"))