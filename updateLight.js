function updateLight(current) {
	const g = "green";
	const y = "yellow";
	const r = "red";
	
	if (current === g) {
	  return y;
	} else if (current === y) {
	  return r;
	} else if (current === r) {
	  return g;
	}
  }
  
  console.log(updateLight("red"));


/// CLEVER SOLUTION:
// const updateLight = current => ({
// 	green: 'yellow',
// 	yellow: 'red',
// 	red: 'green',
//   })[current]