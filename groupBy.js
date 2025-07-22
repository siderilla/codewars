// groupBy() non è un metodo nativo in js, ma è una tecnica ricorrente per
// raggruppare elementi di un array in base a una proprietà comune

const libri = [
  { titolo: "La salvezza di Aka", autore: "Ursula K. Le Guin" },
  { titolo: "Il barone rampante", autore: "Italo Calvino" },
  { titolo: "Gli androidi sognano pecore elettriche?", autore: "Philip Dick" },
  { titolo: "Il visconte dimezzato", autore: "Italo Calvino" }
];

// libri.push({titolo: "Il signore degli anelli"})

// console.log(libri);

// const gruppi = {}; // creo un oggetto vuoto
// libri.forEach(libro => {
//   if (!gruppi[libro.autore]) {
//     gruppi[libro.autore] = []; // creo l'array per quell'autore se non esiste
//   }
//   gruppi[libro.autore].push(libro.titolo); // poi pusho

// });

// console.log(gruppi)

let gruppi = [];

libri.forEach(libro => {
  if (!gruppi[libro.autore]) {
    gruppi = {
      autore: libro.autore,
      libri: [libro.titolo]
    };
  }

  gruppi[libro.autore].libri.push(libro.titolo);
});

console.log(gruppi);


// const libro = { autore: "Italo Calvino" };
// const gruppi = {};

// gruppi.autore = "Jostein Gaarder";

// gruppi[libro.autore] = "Se una notte d'inverno un viaggiatore"; //

// console.log(gruppi);

