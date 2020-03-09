const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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

const words = ["Hello", "Hi", "Bonjour", "Good Morning"];
assertArraysEqual(map(words, word => word + " Dave"), ["Hello Dave", "Hi Dave", "Bonjour Dave", "Good Morning Dave"]);
const numbers = [2, 4, 8, 10, 24, 46, 68, 72, 18, 20];
assertArraysEqual(map(numbers, number => (number/2)), [1, 2, 4, 5, 12, 23, 34, 36, 9, 10]);
const objects = [{firstName: "Dave", secondName: "Smith"}, {firstName: "Mark", secondName: "Zuckerberg"}, {firstName: "Jeff", secondName: "Bezos"}, 
                  {firstName: "Steve", secondName: "Jobs"}];
assertArraysEqual(map(objects, object => `${object.firstName} ${object.secondName}`), ["Dave Smith", "Mark Zuckerberg", "Jeff Bezos", "Steve Jobs"]);


module.exports = map;