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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cde = { c: ["1"], d: ["2", 3] };
const dce = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

module.exports = eqObjects;