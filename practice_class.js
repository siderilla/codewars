/////////// Cos'è una classe?
// - è un costrutto di linguaggio usato come modello per creare oggetti
// - il modello comprende attributi e metodi che saranno condivisi da tutti gli oggetti 
// 	 creati (istanze) a partire dalla classe
// - un oggetto è di fatto l'istanza di una classe

// definisci una classe chiamata 'User'
class User {
    // si chiama il metodo costrutto per inizializzare la proprietà 'name'
    constructor(name) {
        this.name = name; // assegna al parametro 'name' (che è stato passato) alla proprietà name dell'istanza
    }

    // si chiama il metodo per stampare la proprietà 'name' su console
    sayHi() {
        console.log(this.name);
    }
}

// crea una nuova istanza con 'new' della classe 'User' con la proprietà 'name' assegnata "John"
let user = new User("John");

// chiama il metodo 'sayHi' sull'istanza 'user' che stamperà su console "John"
user.sayHi();