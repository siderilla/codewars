function stringToArray(string) {
	return string.split(' ');
}

console.log(stringToArray("Hello world! I'm coding a lot today"))

//CRAZY WAYsssssss
// function stringToArray(string){
//     var result = [];
//     var traverse = function foo(string){
//         for(var i=0;i<string.length;i++){
//             var chr = string.charAt(i);
//             if(chr === " "){
//                 result.push(string.slice(0,i));
//                 foo(string.slice(i+1));
//                 return;
//             }
//         }
//         result.push(string);
//     };
//     traverse(string);
//     return result;
// }


function hero(bullets, dragons) {
	if (bullets / dragons >= 2) {
		return true;
	} else {
		return false;
	}
}
