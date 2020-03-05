const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
}

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const isEqual = eqArrays(arrayOne, arrayTwo);
  if (isEqual) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅: ${arrayOne} === ${arrayTwo}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 ${arrayOne} !== ${arrayTwo}\n`);
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
