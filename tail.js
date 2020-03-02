const tail = function(array) {
  let tail = array.slice(1);
 
  return tail;
  
};

// Assert Function comparing two given values
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const words = ["Yo yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
const emptyArray = [];
console.log(tail(emptyArray));
const secondArray = [1];
console.log(tail(secondArray));
