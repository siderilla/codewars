function DNAtoRNA(dna) {
	const rna = dna.replace(/T/g, "U");
	return rna;
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));


// ALTERNATIVE:

// function DNAtoRNA(dna) {
// 	return dna.split("T").join("U");
// }

// function DNAtoRNA(dna) {
// 	return dna.replaceAll('T', 'U');
// }