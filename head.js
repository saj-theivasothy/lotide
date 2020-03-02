const head = function(array) {
  let first = Number(array.slice(0, 1));
  if (array.length === 0) {
    return undefined;
  } else {
  return first;
  }
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([1]),1);
assertEqual(head([]),1);
assertEqual(head([]), undefined);