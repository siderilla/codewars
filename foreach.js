// forEach() è un metodo degli array che serve per eseguire un'azione su ogni elemento dell'array
// non restituisce un valore utile: restituisce undefined
// il suo scopo non è trasformare o filtrare dati, ma eseguire qualcosa per ogni elemento: tipo stampare a schermo, salvare un file, modificare qualcosa fuori dall'array
// quando usarlo?
// scorrere un array per fare un'azione ma non serve creare un nuovo array
// effetto collaterale dell'azione: loggare, aggiornare variabile, modificare DOM
// non serve costruire una catena di metodi
// “Per ogni cosa in questo array, fai quest'altra cosa. Non mi serve un risultato da questa operazione, mi basta che succeda.”


const users = [
	{ name: "Alice", age: 30 },
	{ name: "Bob", age: 24 },
	{ name: "Charlie", age: 28 }
];

users.forEach(user => {
	console.log(`${user.name} ha ${user.age} anni`);
});

// const result = users.forEach(user => user.age + 1);
// console.log(result);

const carrello = [
	{ nome: "Pane", prezzo: 2.5 },
	{ nome: "Latte", prezzo: 1.8 },
	{ nome: "Uova", prezzo: 3.2 }
];

carrello.forEach(alimento => {
	console.log(`Hai acquistato: ${alimento.nome} al prezzo di ${alimento.prezzo}€`);
});

// find() è un metodo che serve a trovare il primo elemento in un array che soddisfa una condizione
// appena lo trova, si ferma e lo restituisce, se non c'è: undefined
// usarlo quando vuoi un solo elemento e non un array
// quando serve IL PRIMO elemento che soddisfa la condizione

const libri = [
	{ titolo: "La salvezza di Aka", autore: "Ursula K. Le Guin" },
	{ titolo: "Il barone rampante", autore: "Italo Calvino" },
	{ titolo: "Anonimo", autore: "Anonimo"},
	{ titolo: "Gli androidi sognano pecore elettriche?", autore: "Philip Dick" }
];

// const result = libri.find(libro => libro.autore === "Italo Calvino");
// if (result) {
// 	console.log(result);
// } else {
// 	console.log("Libro non trovato!");
// }

function cercaLibroPerAutore(autore) {
	const libro = libri.find(libro => libro.autore === autore);
	if (libro) {
		console.log(`Libro trovato: ${libro.titolo} di ${libro.autore}`);
	} else {
		console.log(`Nessun libro trovato per l'autore: ${autore}`);
	}
}

cercaLibroPerAutore("Italo Calvino");
cercaLibroPerAutore("Neil Gaiman");


// some() è un metodo per array che verifica se almeno un elemento soddisfa una certa condizione
// restituisce un booleano
// usarlo per sapere se c'è almeno un utente online
// verificare se un prodotto è esaurito
// controllare se l'email è già stata letta

const anonimo = libri.some(libro => !libro.autore);
console.log(anonimo);

// every() è un metodo array che verifica se TUTTI GLI ELEMENTI dell'array soddisfano una condizione
// restituisce un booleano

const titolo = libri.every(libro => libro.titolo);
console.log(titolo);

const lunghezzaTitoli = libri.every(libro => libro.titolo.length >= 10);
console.log(lunghezzaTitoli);

const titoloAutore = libri.every(libro => libro.titolo && libro.autore);
console.log(titoloAutore);

// const haTitoloEAutore = libro => libro.titolo && libro.autore;
// const tuttiOk = libri.every(haTitoloEAutore);

// includes() verifica se un array contiene un certo valore
// funziona con valori primitivi (stirng, number, boolean)
// non funziona con gli oggetti

const listaSpesaContiene = ["pane", "burro", "latte"].includes("latte");
console.log(listaSpesaContiene);

// findIndex() restituisce l'indice del primo elemento che soddisfa la condizione
// se non lo trova restituisce -1

const indice = [1, 3, 5, 8].findIndex(num => num % 2 === 0);
console.log(indice);
