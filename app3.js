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

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubles = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// const oddNums = numbers.filter(function (element) {
//   return element % 2 !== 0;
// });

// console.log(oddNums);

// part 37
// arrow functions

// const hello = (name, age) => {
//   console.log(`hello ${name}`);
//   console.log(`you are ${age} years old`);
// };
// hello("john", 25);

// example 2

// setTimeout(() => console.log(`hello`), 3000);

// example 3

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubles = numbers.map((element) => Math.pow(element, 2));

// console.log(doubles);

// part 38
//  object

// const person1 = {
//   name: "john",
//   surname: "doe",
//   age: 30,
//   isemployed: true,
//   sayhello: function () {
//     console.log("hello");
//   },
// };

// const person2 = {
//   name: "jane",
//   surname: "doe",
//   age: 25,
//   isemployed: false,
// };

// console.log(person1.name);
// console.log(person1.surname);
// console.log(person2.age);
// console.log(person2.isemployed);

// person1.sayhello();

// part 39
// this keyword
