var min = function(list){
	let min = Infinity
    for (i = 0; i < list.length; i++) {
      if (list[i] < min) {
            min = list[i];
    	}
    }
    return min;
}

var max = function(list){
    let max = -Infinity;
	for (let i = 0; i < list.length; i++) {
		if (list[i] > max) {
			max = list[i];
		}		
	}
	return max;
}

console.log(min([20,12,11,5]));
console.log(max([20,12,11,5]));


/////////// BEST WAY
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// var min = function(list){
//     return Math.min(...list)
// }

// var max = function(list){
    
//     return Math.max(...list)
// }


// thespiderlady:
// 		I know what the "..." stands for before list, but why is it necessary?

// stephn2027:
//  	because the list is an array so we need to iterate over the array. we can't just pass 
// 		list to Math.min() as an array so we need the spread operator (...) to ensure that the
// 		Math.min() function goes over every element on the list to get the smallest value (min).
// 		Hope this helps.