const eqObjects = function (objectOne, objectTwo) {
  const keysOne = Object.keys(objectOne); 
  const keysTwo = Object.keys(objectTwo);

  if (keysOne.length !== keysTwo.length) {
    return false;
  } else {
    for (let key of keysOne) {
      if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
        return eqArrays(objectOne[key], objectTwo[key]);
      } else if (!objectTwo[key]) {
        return false;
      } else if (objectOne[key] !== objectTwo[key]) {
        return false;
      }
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅: ${inspect(actual)} === ${inspect(expected)}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 ${inspect(actual)} !== ${inspect(expected)}\n`);
  }
}

assertObjectsEqual({c: "1", d: ["2", 3]}, { d: ["2", 3], c: "1" });