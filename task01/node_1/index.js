const calculateRPN = require('first_node_pack_01');

const testCases = [
  { expression: '15 9 + 10 - 14 - 7 * 5 14 * 14 - *', expected: 0 },
  { expression: '8 2 15 * + 8 - 13 * 15 - 6 6 13 + + -', expected: 350 },
  { expression: '4 9 + 1 - 2 6 13 8 0 6 9 * - - + + - *', expected: -948 },
  { expression: '6 1 - 14 * 11 + 3 - 2 12 5 - * +', expected: 92 },
  { expression: '2 11 6 * - 6 * 7 - 7 + 14 + 8 10 * +', expected: -290 },
  { expression: '13 3 14 * 10 + * 12 4 + + 8 *', expected: 5536 },
  { expression: '10 3 11 - + 7 + 2 - 10 - 10 -', expected: -13 },
  { expression: '4 9 - 1 14 - - 12 + 2 1 - - 8 -', expected: 11 },
  { expression: '2 11 0 * * 13 15 - + 0 - 4 * 1 *', expected: -8 },
  { expression: '4 8 6 10 * * * 0 11 * -', expected: 1920 },
];

function checkResults(testCases) {
  testCases.forEach(({ expression, expected }, index) => {
    const result = calculateRPN(expression);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Expression: ${expression}`);
    console.log(`Expected: ${expected}, Calculated: ${result}`);
    console.log(result === expected ? '✅ Passed' : '❌ Failed');
    console.log('-----------------------------------');
  });
}
checkResults(testCases);
