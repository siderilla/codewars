function findX(x, a) {
	let lower = 0;
	let upper = a.length - 1;

	while (lower < upper) {
		let middle = Math.floor ((lower + upper) / 2);
		if (x > a[middle]) {
			lower = middle + 1;
		} else {
			upper = middle;
		}
	}

	return a[lower] === x ? lower : -1;
}

console.log("Test ordinario: ", findX(18, [2, 5, 6, 7, 10, 18, 21, 23]))
console.log("Test con un solo elemento: ", findX(18, [18]))
console.log("Test elemento non esiste: ", findX(1, [2, 5, 6, 7, 10, 18, 21, 23]))
console.log("Test elemento più grande non esiste: ", findX(25, [2, 5, 6, 7, 10, 18, 21, 23]))
console.log("Test primo elemento: ", findX(2, [2, 5, 6, 7, 10, 18, 21, 23]))
console.log("Test ultimo elemento: ", findX(23, [2, 5, 6, 7, 10, 18, 21, 23]))


// Può essere utile aggiungere un if attorno alla funzione per gestire output più chiari.
// Esempio:

// const index = findX(25, [2, 5, 6, 7, 10, 18, 21, 23]);
// if (index === -1) {
//     console.log("❌ Valore non trovato nell'array.");
// } else {
//     console.log("✅ Valore trovato all'indice:", index);
// }

// 💬 Oppure dentro la funzione stessa?
// Dipende.
// Se la funzione è pensata per essere riutilizzata in più contesti, è meglio che restituisca solo l’indice (come stai facendo), e poi chi la usa decide cosa fare con l’output.
// In altre parole: mantieni la funzione pura, e gestisci i messaggi fuori da essa.
