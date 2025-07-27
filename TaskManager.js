// mini sfida: costruire TaskManager: un array di oggetti con filter, sort, map e reduce

// simulare un gestore di task, dove ogni task è un oggetto e ci sono varie funzioni 
// che permettono di filtrare, riordinar,e mappare e sintetizzare le informazioni

const tasks = [
    { titolo: "Comprare il latte", priorità: 2, scadenza: "2025-07-25", completato: false },
    { titolo: "Finire progetto Angular", priorità: 1, scadenza: "2025-07-21", completato: true },
    { titolo: "Chiamare il dentista", priorità: 3, scadenza: "2025-07-28", completato: false },
    { titolo: "Pulire casa", priorità: 2, scadenza: "2025-07-22", completato: true },
    { titolo: "Fare backup del computer", priorità: 1, scadenza: "2025-07-23", completato: false }
];

const criteria = { priorità: 2, entro: "2025-07-22" }

function filterTasks(array, criteria) {
    const result = array.filter((task) =>
        task.priorità <= criteria.priorità &&
        task.scadenza <= criteria.entro
    );
    return result;
    // console.log(result);
}

//////////////////////

function sortByDeadline(array, key) {
    let newArray = [...array];
    newArray.sort((a, b) => {
        const aVal = typeof a[key] === "string" ? new Date(a[key]) : a[key];
        const bVal = typeof b[key] === "string" ? new Date(b[key]) : b[key];
        return aVal - bVal;
    });
    return newArray;
    //   console.log(newArray);
}

//////////////////////

function uppercaseTitles(array) {

    const uppercase = array.map((obj) => obj.titolo.toUpperCase());
    return uppercase;
    console.log("the const", uppercase);
}

//////////////////////

function getCompletionStats(array) {
    const completati = array.reduce((acc, task) => acc + task.completato, 0);
    const nonCompletati = array.reduce((acc, task) => acc + (!task.completato), 0);
    return completati, nonCompletati;
    console.log("task completati: ", completati);
    console.log("task non completati: ", nonCompletati);
}

getCompletionStats(tasks);

//////////////////////

function getUrgentTasks(array) {
    const urgenti = array.filter((task) => task.priorità === 1);
    return urgenti;
    console.log("task urgenti: ", urgenti);
}

getUrgentTasks(tasks);

//////////////////////

let completationStatus = {
    completati: [],
    incompleti: []
};

function groupByStatus(array) {

    array.forEach(task => {
        if (task.completato === true) {
            completationStatus.completati.push(task.titolo);
        } else {
            completationStatus.incompleti.push(task.titolo);
        }
    });

    return completationStatus;
    console.log("raggruppamento stato: ", completationStatus);
}

groupByStatus(tasks);

//////////////////////

function getAveragePriority(array) {
    const average = array.reduce((acc, task) => acc + task.priorità, 0);
    console.log(average / array.length);
    return average / array.length;
}

getAveragePriority(tasks);

//////////////////////

class TaskManager {
    
    constructor(tasks) {
        this.tasks = tasks;
    }
    uppercaseTitles() {
        return this.tasks.map(task => task.titolo.toUpperCase());
    }

}

const manager = new TaskManager(tasks);
console.log("MAIUSCOLO CON CLASSE: ", manager.uppercaseTitles());