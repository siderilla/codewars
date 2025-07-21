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
	{ titolo: "La salvezza di Aka", autore: "Ursula K. Le Guin"},
	{ titolo: "Il barone rampante", autore: "Italo Calvino"},
	{ titolo: "Gli androidi sognano pecore elettriche?", autore: "Philip Dick"}
];

const result = libri.find(libro => libro.autore === "Italo Calvino");
if (result) {
	console.log(result);
} else {
	console.log("Libro non trovato!");
}
