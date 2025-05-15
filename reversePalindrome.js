// function isPalindrome(x) {
//   let stringToArray = x.toLowerCase().split("");
//   let reverseArray = stringToArray.reverse();
//   let arrayToString = reverseArray.join("");

//   if (arrayToString === x) {
//       return true;
//     } else {
//       return false;
//     }
// }

// console.log(isPalindrome("a"));
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("AbBa"));
// console.log(isPalindrome("cicicioa A"));
// console.log(isPalindrome(""));


function isPalindrome(x) {
    let lower = x.toLowerCase();
    let reversed = lower.split("").reverse().join("");
    return lower === reversed;
}

console.log(isPalindrome("a"));         // true
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("AbBa"));      // true
console.log(isPalindrome("cicicioa A"));// false
console.log(isPalindrome(""));          // true