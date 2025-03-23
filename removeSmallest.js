// STEP BY STEP
// Trova il valore più piccolo con Math.min
// Trova dove si trova per la prima volta con indexOf
// Togli solo quell’indice
// Restituisci un nuovo array

function removeSmallest(numbers) {
	const min = Math.min(...numbers); // cerca il valore minimo contenuto dentro l'array (...numbers) con Math.min e salvalo nella costante min
	const index = numbers.indexOf(min); // cerca l'indice di min dentro l'array numbers
	const newArray = numbers.filter((_, i) => i !== index); // _ è il valore dell'elemento ma non ci serve - i è l'indice corrente - index è l'indice da rimuovere - dunque filter crea un nuovo array con dentro tutti gli elementi diversi da index ( che è lo smallest value )
	return newArray;
}
  
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([2, 5, 2, 5, 7]));