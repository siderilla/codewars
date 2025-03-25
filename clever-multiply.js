// In base 10, adding an extra 0 to the end of a number multiplies it by 10. In base 2, adding an extra 0 to the end of a number multiplies it by 2.
// 1 in binary is 1, 2 in binary 10. 2 in binary is 10, 4 in binary is 100. 3 in binary is 11, 6 in binary 110.
// The << operator moves all of the binary digits left by the number specified, and adds that many zeros. (Inversely the >> operator moves all of the binary digits right).
// So n << 1 adds one zero (doubles), n << 2 adds two zeros (quadruples), etc.
// See this Wikipedia page (https://en.wikipedia.org/wiki/Arithmetic_shift) on bit shifts for more information.

function doubleInteger(i) {
    return i << 1;
}

// è equibalente a:

function doubleInteger(i) {
    return i * 1;
  }