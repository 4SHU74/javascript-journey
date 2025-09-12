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
//  can say its a reference to the current object or object method

// const person1 = {
//   name: "spongebob",
//   favfood: "krabby patty",
//   sayhello: function () {
//     console.log(`hello there ${this.name}`);
//   },
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favfood}`);
//   },
// };

// const person2 = {
//   name: "patrick",
//   favfood: "pizza",
//   sayhello: function () {
//     console.log(`hello there ${this.name}`);
//   },
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favfood}`);
//   },
// };

// person1.eat();
// person2.eat();

// part 40
// constructors

// const car1 = {
//   make: "ford",
//   model: "mustang",
//   year: 2000,
//   color: "red",
//   drive: function () {
//     console.log(`you drive ${this.model}`);
//   },
// };
// const car2 = {
//   make: "chevrolet",
//   model: "camaro",
//   year: 2003,
//   color: "blue",
//   drive: function () {
//     console.log(`you drive ${this.model}`);
//   },
// };

// const car3 = {
//   make: "dodge",
//   model: "charger",
//   year: 20010,
//   color: "silver",
//   drive: function () {
//     console.log(`you drive ${this.model}`);
//   },
// };

// console.log(car3.year);
// car3.drive();
// this is really bad practice to create multiple objects like this
// instead we use constructors
// note i think i know thats this  topic

// the on top was showing us why doing the multiple object is bad practice

// this example now will be with the contructor

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}
