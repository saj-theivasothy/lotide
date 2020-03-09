const flatten = function(sourceArray) {
  const flattenedArray = [];
  for (let element of sourceArray) {
    if (Array.isArray(element) === true) {
      for (let nestedElements of element) {
        flattenedArray.push(nestedElements);
     }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray.length !== secondArray.length) {
      return false
    } else if (firstArray[i] !== secondArray[i]) {
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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;