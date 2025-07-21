const products = [
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "Headphones", price: 199.99, category: "Electronics" },
  { name: "Coffee Mug", price: 9.99, category: "Home" },
  { name: "Notebook", price: 5.49, category: "Stationery" },
  { name: "Pen", price: 2.49, category: "Stationery" },
  { name: "Smartphone", price: 699.99, category: "Electronics" },
  { name: "Pillow", price: 25.00, category: "Home" }
];


// Quali prodotti costano meno di 20 euro?
const lessThanTwenty = products.filter((product) => product.price < 20);
console.log(lessThanTwenty);

// Crea un array con solo i nomi di tutti i prodotti.
const productNames = products.map((product) => product.name);
console.log(productNames);

// Qual è il prezzo medio di tutti i prodotti?
const sumPrices = products.reduce((acc, product) => acc + product.price, 0);
const averagePrice = sumPrices / products.length;
console.log(averagePrice.toFixed(1));

// Crea un array con i nomi dei prodotti della categoria "Stationery".
const onlyStationery = products.filter((product) => product.category === "Stationery");
const mapNames = onlyStationery.map((product) => product.name)
console.log(mapNames);

const onlyStationeryNames = products
                            .filter((product) => product.category === "Stationery")
                            .map((product) => product.name);
console.log(onlyStationeryNames);

// Calcola il totale speso se compri un articolo per tipo.
const sumTotal = products.reduce((acc, product) => acc + product.price, 0);
console.log(sumTotal);