const tasks = [
  { titolo: "Comprare il latte", priorità: 2, scadenza: "2025-07-25" },
  { titolo: "Finire progetto Angular", priorità: 1, scadenza: "2025-07-21" },
  { titolo: "Chiamare il dentista", priorità: 3, scadenza: "2025-07-28" },
  { titolo: "Pulire casa", priorità: 2, scadenza: "2025-07-22" },
  { titolo: "Fare backup del computer", priorità: 1, scadenza: "2025-07-23" }
];

// const result = tasks.filter((task) => task.priorità <= 2 && task.scadenza <= "2025-07-22");
// console.log(result);

const criteria = { priorità: 2, entro: "2025-07-22" }

function filterTasks(tasks, criteria) {
    const result = tasks.filter((task) => 
        task.priorità <= criteria.priorità && 
        task.scadenza <= criteria.entro
    );
    console.log(result);
}

filterTasks(tasks, criteria);
