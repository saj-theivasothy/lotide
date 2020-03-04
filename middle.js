const middle = function(array) {
  const midElements = [];
  const midIndex = Math.floor(array.length/2);
  if (array.length % 2 !== 0) {
    midElements.push(array[midIndex]);
  } else if(array.length > 0) {
    midElements.push(array[midIndex - 1]);
    midElements.push(array[midIndex]);
  }
  return midElements;
}

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) { 
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅: ${actual} === ${expected}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 ${actual} !== ${expected}\n`);
  }
}



assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]