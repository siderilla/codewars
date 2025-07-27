// sort() è un metodo array che ordina in-place (modifica direttamente l'array) secondo un criterio
// di default ordina alfabeticamente e in ordine crescente ma sui numeri fa casino (ah si ricordo)

// // per i numeri:
// [10, 2, 5].sort(); // ➡️ [10, 2, 5]

// numeri.sort((a, b) => a - b); // ordina in modo crescente
// numeri.sort((a, b) => b - a); // ordina in modo decrescente

const tasks = [
  { titolo: "Comprare il latte", priorità: 2, scadenza: "2025-07-25" },
  { titolo: "Finire progetto Angular", priorità: 1, scadenza: "2025-07-21" },
  { titolo: "Chiamare il dentista", priorità: 3, scadenza: "2025-07-28" },
  { titolo: "Pulire casa", priorità: 2, scadenza: "2025-07-22" },
  { titolo: "Fare backup del computer", priorità: 1, scadenza: "2025-07-23" }
];

// riordine = tasks.sort((a, b) => a.priorità - b.priorità);
// console.log(riordine);

// scade = riordine.sort((a, b) => a.scadenza - b.scadenza);
// console.log(scade);

// const result = tasks.filter((task) => task.priorità <= 2 && task.scadenza <= "2025-07-22");
// console.log(result);

// scrivere una funzione riutilizzabile che prende in input un array di task e 
// li ordina in base alla data di scadenza

// function sortByDeadline(array) {
//   let newArray = [...array];
//   newArray.sort((a, b) => new Date(a.scadenza) - new Date(b.scadenza));
//   console.log(newArray);
// }

// sortByDeadline(tasks);

function sortByDeadline(array, key) {
  let newArray = [...array];
  newArray.sort((a, b) => {
    const aVal = typeof a[key] === "string" ? new Date(a[key]) : a[key];
    const bVal = typeof b[key] === "string" ? new Date(b[key]) : b[key];
    return aVal - bVal;
  });
  console.log(newArray);
}

sortByDeadline(tasks, "scadenza");