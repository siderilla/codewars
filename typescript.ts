// TIPI PRIMITIVI:
// let name1: string = "siderilla";
// let age: number = 25;
// let isStudying: boolean = true;

// ARRAY

// let numbers: number[] = [1, 2, 3];
// let words: string[] = ["hello", "world"];
// let numbersAlt: Array<number> = [1, 2, 3]; //alternativa equivalente

// TUPLE (array con tipi predefiniti in ordine)

// let person: [string, number] = ["siderilla", 25];

// ENUM

enum Priority {
    High = 1,
    Medium = 2,
    Low = 3
}

let p: Priority = Priority.High;

// OGGETTI CON INTERFACE

interface Task {
    title: string;
    priority: number;
    expiration: string;
    completed: boolean;
}

// // FUNZIONI TIPATE

// function sum(a: number, b: number): number { // (parametro: tipo): tipo del valore di ritorno
//     return a + b;
// }

// function sayHello(name: string = "user"): string {
//     return `Hello ${name}`
// }

// // FUNZIONI ARROW TIPATE

// const multiply = (x: number, y: number): number => x * y;

// // UNION TYPES

// let value: string | number;
// value = 42;
// value = "hello";

// // TYPE ALIAS

// type ID = string | number;
// let userId: ID = "abc123";

// // TIPI PERSONALIZZATI + optional

// interface User {
//     name: string;
//     email?: string;
// }

// // TIPARE OGGETTI E ARRAY AL VOLO

// const settings: { darkMode: boolean; fontSize: number } = {
//     darkMode: true,
//     fontSize: 16
// };

// const taskList: Task[] = [/*array di oggetti*/]

// // ANY E UNKNOWN

// let stuff: any = 5; // disattiva i controlli, ma è meglio evitare
// let stuff2: unknown = 5; // più sicuro ma va controllato prima di usarlo

// // CASTING

// let input = document.getElementById('title') as HTMLInputElement;
// console.log(input.value);

// restituisce un elemento generico di tipo HTMLElement
// ma TypeScript non può sapere di preciso che tipo sia (può essere un <div>, uno <span>, un <form>, ecc).
// solo alcuni elementi HTML hanno la proprietà .value (es. <input>, <textarea>, <select>).
// .value è una proprietà di HTMLInputElement

// READONLY e COSTANTI

// interface Config {
//     readonly id: string; // readonly impedisce che venga modificato dopo
//     name: string;
// }

/////////////////////////////////////////////

const Tasks: Task[] = [
  { title: 'Comprare latte', priority: Priority.Medium, expiration: '2025-07-25', completed: false },
  { title: 'Ripassare Angular', priority: Priority.High, expiration: '2025-07-24', completed: false },
  { title: 'Fare il backup', priority: Priority.Low, expiration: '2025-07-28', completed: true }
];


function filterByPriority(tasks: Task[], livello: Priority): Task[] {
  return tasks.filter(task => task.priority <= livello);
}

function sortByExpiration(tasks: Task[]): Task[] {
    return [...tasks].sort((a, b) => a.expiration.localeCompare(b.expiration));
}

console.log('Solo alta o media:', filterByPriority(Tasks, Priority.Medium));
console.log('Ordinati per scadenza:', sortByExpiration(Tasks));
