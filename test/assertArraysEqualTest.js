const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([3,2,1], [1,2,3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "6"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);