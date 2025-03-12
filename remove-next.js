function removeEveryOther(arr){
    newArray = [];
    for (i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        // newArray += arr[i]; <-- questa soluzione crea una stringa brutta
        newArray.push(arr[i]); // pushando nell'array invece, creo un array di stringhe
      }
    }
    return newArray;
  }
  
  console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Miao', 'Super']));

// posso usare .filter
//   const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);