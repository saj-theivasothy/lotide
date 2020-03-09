const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  describe('testing with input ---> ["Yo yo", "Lighthouse", "Labs"]', () => {
    it('should return 2 for test1.length', () => {
      assert.strictEqual(tail(["Yo yo", "Lighthouse", "Labs"]).length, 2);
    });

    it('should return "Lighthouse for test1[0]', () => {
      const test1 = tail(["Yo yo", "Lighthouse", "Labs"]);
      assert.strictEqual(test1[0], 'Lighthouse');
    });

    it('should return "Labs for test1[1]', () => {
      const test1 = tail(["Yo yo", "Lighthouse", "Labs"]);
      assert.strictEqual(test1[1], 'Labs');
    });
  });
   
  describe('testing with input ---> []', () => {
    it('should return undefined for []', () => {
      const emptyArray = tail([]);
      assert.strictEqual(emptyArray.length, 0);
    })
  })
});

// const test1 = tail(["Yo yo", "Lighthouse", "Labs"]);
// assertEqual(test1.length, 2);
// assertEqual(test1[0], "Lighthouse");
// assertEqual(test1[1], "Labs");
// const emptyArray = [];
// assertEqual(tail(emptyArray).length, 0);

