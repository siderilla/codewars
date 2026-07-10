function numberToString(num) {
  return num.toString(8)
}

console.log(numberToString(255));

// (255).toString(2)   // "11111111"  binario
// (255).toString(8)   // "377"       ottale
// (255).toString(16)  // "ff"        esadecimale
// (255).toString(36)  // "73"        base 36!