const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return ["Lighthouse", "Labs"] for ["Yo yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('should return undefined for []', () => {
    const emptyArray = tail([]);
    assert.strictEqual(emptyArray.length, 0);
  })
});

// const test1 = tail(["Yo yo", "Lighthouse", "Labs"]);
// assertEqual(test1.length, 2);
// assertEqual(test1[0], "Lighthouse");
// assertEqual(test1[1], "Labs");
// const emptyArray = [];
// assertEqual(tail(emptyArray).length, 0);

