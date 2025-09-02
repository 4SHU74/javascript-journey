// part 3
// continue from here am really setback lmao
//  part 35
// reduce()
// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element) {
//   return accumulator + element;
// }

// eaxmple 2

// const ages = [75, 50, 90, 80, 65, 95];
// const minimum = ages.reduce(getmin);

// console.log(minimum);

// function getmax(accumulator, element) {
//   return Math.max(accumulator, element);
// }

// function getmin(accumulator, element) {
//   return Math.min(accumulator, element);
// }

// part 36
// function expressions

// const hello = function () {
//   console.log("HELLO");
// };

// hello();

// function hello() {
//   console.log("hello");
// }

// setTimeout(function () {
//   console.log("hello");
// }, 3000);

// another example

const numbers = [1, 2, 3, 4, 5, 6];
const doubles = numbers.map(function (element) {
  return Math.pow(element, 2);
});
const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0;
});

console.log(oddNums);
