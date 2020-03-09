const tail = require('../tail');
const assertEqual = require('../assertEqual');


const test1 = tail(["Yo yo", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2);
assertEqual(test1[0], "Lighthouse");
assertEqual(test1[1], "Labs");
const emptyArray = [];
assertEqual(tail(emptyArray).length, 0);

