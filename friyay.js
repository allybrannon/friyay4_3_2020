// Problem 4: Write a function called sumZero which accepts a SORTED array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

sortedarray = [-11, -8, -3, 1, 2, 5, 23];

function sumZero(sortedarray) {
  for (var i = 0; i < sortedarray.length; i++) {
    for (var x = 0; x < sortedarray.length; x++) {
      if (sortedarray[i] + sortedarray[x] === 0) {
        return sortedarray[i], sortedarray[x];
      }
    }
  }
}
console.log(sumZero(sortedarray));
