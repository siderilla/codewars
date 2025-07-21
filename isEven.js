function testEven(n) {
    if (n % 2 === 0) return true;
    else return false;
}

function sumEven(a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0)
        s = s + a[i];
    }
    return s;
}

console.log("Sommo tutti i numeri pari dentro l'array: ");
console.log(sumEven([1, 4, 3, 6, 8, 1, 1, 0]));


function sumSquare(a) {
    let s = 0;
    for (let i = 0; i < a.length; i++) {
        s = s + (a[i] * a[i]);
    }
    return s;
}

console.log("Sommo tutti i quadrati dentro l'array: ");
console.log(sumSquare([1, 4, 3, 6, 24, 1, 1, 0]));


function sumSome(a) {
    let s = 0;
    for (let i = 0; i <= 3; i++) {
        s = s + a[i];
    }
    return s;
}

console.log("Sommo i primi quattro elementi dell'array: ");
console.log(sumSome([1, 4, 3, 6, 24, 1, 1, 0]));

// 1.

// s = 0;
// for (i = 0; i <= k; i++) {
//       if (a[i] % 2 == 0) {
//             s = s + a[i]
//       }
// }
// return s;

// 2.

// s = 0;
// for (i = 0; i <= k; i++) {
//             s = s + a[i]
// }
// return s;

// oppure

// s = 0;
// for (i = 1; i <= 3; i++) {
//             s = s + a[i]
// }
// return s;

// 3.
// s = 0;
// for (i = 0; i <= k; i++) {
//       s = s + (a[i] * a[i])
// }
// return s;