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

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
// }

//  classes part 41

// classes = provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
// eg like static keyword, encapsulation,inheritance.

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   displayproduct() {
//     console.log(`product : ${this.name}`);
//     console.log(`price: ${this.price}`);
//   }
// }

// const product1 = new Product("shirt", 91.99);
// const product2 = new Product("pants", 91.99);

// product2.displayproduct();

// class FootballClub {
//   constructor(name, goals = 0) {
//     this.name = name;
//     this.goals = goals;
//   }

//   score() {
//     this.goals += 1;
//   }
// }

// const showResult = (club1, club2) => {
//   console.log(`${club1.name} ${club1.goals} - ${club2.goals} ${club2.name}`);
// };

// const psg = new FootballClub(`PSG`);
// const realMadrid = new FootballClub(`Real Madrid`);

// psg.score();
// realMadrid.score();
// psg.score();
// psg.score();
// psg.score();
// showResult(psg, realMadrid);

// part 42
// static method in classes

// part 43
// inheritance
// lets go its the process where by the child class can inherit or extend or have the parent properties.

// class animal {
//   alive = true;

//   eat() {
//     console.log(`this ${this.name} is eating`);
//   }
//   sleeping() {
//     console.log(`this ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends animal {
//   name = "rabbit";

//   hop() {
//     console.log(`this ${this.name} is hopping`);
//   }
// }
// class Fish extends animal {
//   name = "fish";

//   swim() {
//     console.log(`this ${this.name} is swimming`);
//   }
// }
// class Hawk extends animal {
//   name = "hawk";

//   fly() {
//     console.log(`this ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(hawk.alive);
// fish.sleeping();
// fish.eat();
// hawk.swim();
// hawk.hop();
// rabbit.fly();

//  paart 44 is super
// super
// it means the parent class of the inheritance lol dont undertsand more than this or that would do more research but for now thats all i have.

//  note am comoing back to this lets go back to static lol

//  part 45
//  get and set
// get is to access property
// set is asign a value to a property

// class person {
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }

//   get fullName() {
//     return `${this.first} ${this.last}`;
//   }
//   set fullName(newName) {
//     if (!newName) {
//       throw "boooo fuck u men write something";
//     }
//     const [first, last] = newName.split("");
//     this.first = first;
//     this.last = last;
//   }
// }
// const actor = new person("Bredan", "fraser");

// console.log(actor.fullName);
// actor.first = "colt";

// console.log(actor.fullName);

// actor.fullName = "tim colt";

//  another example for get and set from bro code
// set one showing us what it looks like with out using set note this is set first example
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// const rectangle = new Rectangle(-10000, `pizza`);

// console.log(rectangle.width);
// console.log(rectangle.height);

// now this is it with set
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error(`width must be a postive number`);
    }
  }
  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error(`height must be a postive number`);
    }
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(10000, 20);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//  fisrt example done
