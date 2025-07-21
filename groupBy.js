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

const gruppi = {}; // creo un oggetto vuoto
libri.forEach(libro => {
    gruppi.push(libro);
});

console.log(gruppi)