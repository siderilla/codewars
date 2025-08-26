// enum Priority {
// 	High = 1,
// 	Medium = 2,
// 	Low = 3
// }

// interface Task {
// 	title: string;
// 	priority: Priority;
// 	expiration: string;
// 	completed: boolean;
// }

// const Tasks: Task[] = [
// 	{ title: 'Comprare latte', priority: Priority.Medium, expiration: '2025-07-25', completed: false },
// 	{ title: 'Ripassare Angular', priority: Priority.High, expiration: '2025-07-24', completed: false },
// 	{ title: 'Fare il backup', priority: Priority.Low, expiration: '2025-07-28', completed: true },
// 	{ title: 'Suonare Dragonborne', priority: Priority.Low, expiration: '2025-07-29', completed: false }
// ];

// // type Status = 'Complete' | 'Incomplete';

// const statusToBool = {
// 	Complete: true,
// 	Incomplete: false
// };

// // // restituisce i task della priorità richiesta

// function filterByPriority(tasks: Task[], level: Priority): Task[] {
// 	return tasks.filter(task => task.priority <= level);
// }

// // console.log('--- FILTRO PRIORITÀ ---');
// // console.log('Solo alta o media:', filterByPriority(Tasks, Priority.Medium));

// // // ordina per scadenza (dalla più vicina alla più lontana)

// function sortByExpiration(tasks: Task[]): Task[] {
// 	return [...tasks].sort((a, b) => a.expiration.localeCompare(b.expiration));
// }

// // console.log('--- ORDINAMENTO SCADENZE ---');
// // console.log('Ordinati per scadenza:', sortByExpiration(Tasks));

// // // restituisce un nuovo array filtrato per status di completamento fornito dall'utente

// function isCompleted(tasks: Task[], status: Status): Task[] {
// 	const newTasks = tasks.filter(task => {
// 		return task.completed === statusToBool[status];
// 	});
// 	return newTasks;
// }

// // console.log('--- TASK COMPLETATI ---');
// // console.log(isCompleted(Tasks, 'Complete'));

// // // conta quanti task appartengono al livello di priorità selezionato

// function countByPriority(tasks: Task[], priority: Priority): number {
// 	const counted = tasks.filter(task => task.priority === priority).length;
// 	return counted;
// }

// // console.log('--- TASK PER PRIORITÀ ---');
// // console.log(countByPriority(Tasks, Priority.Low));

// // // restituisce un oggetto con il conteggio dei completati e incompleti per ogni livello di priorità

// // function summarizeTasks(tasks: Task[], priority: Priority, status: Status): {} {
// // 	const summarize: { [key: string]: { complete: number; incomplete: number } } = {};
// // 	tasks.forEach(task => {
// // 		if (!Priority[1]) {
// // 			let High = { complete: 0, incomplete: 0 };
// // 		}
// // 	});
// // 	return summirize;
// // }