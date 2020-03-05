const letterPositions = function(sentence) {
  const results = {};
  let indexOfLetter = 0;
  for (let letters of sentence) {
    if(results[letters]) {
      results[letters].push(indexOfLetter);
    } else {
      results[letters] = [indexOfLetter];
    }
    indexOfLetter++;
  }
  return results;
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

const result1 = letterPositions("hello");
assertArraysEqual(result1["h"],[0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);