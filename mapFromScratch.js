// map() è un metodo iterativo che restituisce UN NUOVO array dove una funzione chiamante è stata applicata su ciascun elemento
// .non modifica l'array originale
// .non modifica elementi che non esistono

function mapFromScratches(array, callback) {
	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		const modifiedElement = callback(element);
		newArray.push(modifiedElement);
	}

	return newArray;
}

console.log(mapFromScratches([1.2, 3.5, 0.1, 5.8], Math.floor));

// questo è solo un esempio, ma in teoria la funzione 
// chiamante dovrebbe esser passata come parametro 
// e non dentro la fuzione, map() di base non sa che cosa deve fare, 
// glie lo dici passandolo come parametro: 
// si chiama ASTRAZIONE FUNZIONALE