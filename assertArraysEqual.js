const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
  const isEqual = eqArrays(arrayOne, arrayTwo);
  if (isEqual) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅: ${arrayOne} === ${arrayTwo}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 ${arrayOne} !== ${arrayTwo}\n`);
  }
}

module.exports = assertArraysEqual;

