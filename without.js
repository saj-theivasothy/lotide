const without = function(sourceArray, itemsToRemoveArray) {
  const newArray = [];
  for (let originalNumbers of sourceArray) {
    for (let [unwantedNumberIndex, unwantedNumbers] of itemsToRemoveArray.entries()) {
      if (originalNumbers !== unwantedNumbers && unwantedNumberIndex === (itemsToRemoveArray.length - 1)) {
        newArray.push(originalNumbers);
      } 
    }
  }
  return newArray;
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

assertArraysEqual(without([1,2,3], [1]), [2,3]);  
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

module.exports = without;