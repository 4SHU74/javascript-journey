// creating this for no reason lol
//  so lol i have a reason now to use this using the other stuff to host my site for my learing and prjects lets see how thing be lol

//  didnt complete my tenary opertors stuff so am gona learn that well before we move ahead

// string slicing lol
// part 15 of js course

// const fullname = "bro code";

// let firstname = fullname.slice(0, 3);
// let lastname = fullname.slice(4, 9);
// let firstchar = fullname.slice(0, 2);
// let lastchar = fullname.slice(-4);

// console.log(lastchar);

// part 16 and 17 dont didnt do much but i will
// ai to help me explain this stuff

// part 22
// functions in js
// crazy

// function happybirthday(username, age) {
//   console.log(`happy birthday to you`);
//   console.log(`happy birthday to you`);
//   console.log(`happy birthday dear  ${username}`);
//   console.log(`happy birthday to you`);
//   console.log(`you are ${age} old`);
// }

// happybirthday(`brocode`, 25);
// happybirthday(`spongebob`, 37);
// happybirthday(`patrick`, 45);

// talking about returning values from functions

// function add(x, y) {
//   let sum = x + y;

//   return sum;
//   // could also call this return x+y; shorten the one above
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }

// function isEven(number) {
//   return number % 2 === 0 ? true : false;
// this whole line of if statemtns code about to be shorten with a ternary operator lol
// if (number % 2 === 0) {
//   return true;
// } else {
//   return false;
// }
// }
// function to check if an email is valid
// a valid email contains an "@" symbol
// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
//   // this is a simple way to check if an email is valid
// }

// console.log(isValidEmail("brocode@fate.com"));
// console.log(isValidEmail("brocodefate.com"));

// console.log(isEven(21));
// console.log(divide(2, 3));
// and as for this one u can also do this console.log(add(2, 3)); // this will al(so work

// part 23
// varible scope
// read about it just watched he video

// part 2
// array in js
// arrays are used to store multiple values in a single variable

// let fruits = [`appple`, `bananna`, `orange`, `mango`];

// fruits[2] = `coconunt`; // this will change the first element of the array

// fruits.push(`grape`); // this will add a new element to the end of the array
// fruits.unshift(`kiwi`); // this will add a new element to the beginning of the array
// fruits.pop(); // this will remove the last element of the array
// fruits.shift(); // this will remove the first element of the array

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let numoffruits = fruits.length; // this will give you the number of elements in the array
// let index = fruits.indexOf(`mango`); // this will give you the index of the element in the array

// fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// part 26
// 2d array
// its bascially arrays inside arrays
// made up of rows and columns

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [`*`, 0, `#`],
// ];

// matrix[0][0] = `X`;
// matrix[0][1] = `O`;
// matrix[0][2] = `X`;

// matrix[1][0] = `O`;
// matrix[1][1] = `X`;
// matrix[1][2] = `O`;

// matrix[2][0] = `X`;
// matrix[2][1] = `O`;
// matrix[2][2] = `X`;

// for (let row of matrix) {
//   const rowString = row.join(` `);
//   console.log(rowString);
// }

//  part 27
// spread operators represented by this (...)
// spread operator is used to expand an array into its individual elements

// let number = [1, 2, 3, 4, 5];
// let maximum = Math.max(...number); // this will give you the maximum value in the array

// console.log(maximum); // Output: 5

// i have passed alot now am at part 31
// doing callbacks

// hello(leave);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }
// function goodbye() {
//   console.log("goodbye!");
// }
// function leave() {
//   console.log("leave!");
// }
// function wait() {
//   console.log("wait!");
// }

// sum(displayPage, 1, 2);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// function displayPage(result) {
//   document.getElementById("h1").textContent = result;
// }

//  32 for each()

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(triple);
// numbers.forEach(double);
// numbers.forEach(display);

// function display(element) {
//   console.log(element);
// }

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// foreach is an array method will revise this later its been long tho but anyhow need to revise all my js stuff so idont forget somethings

// part 33 map() array method

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);
// console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// example 2

// const students = ["spongebob", "patrick", "squidward", "sandy"];

// const studentsUpper = students.map(uppercase);
// const studentsLower = students.map(lowercase);

// console.log(studentsLower);

// function uppercase(element) {
//   return element.toUpperCase();
// }

// function lowercase(element) {
//   return element.toLowerCase();
// }
//  done going to filter next i think this should be self explainatory bcuz its a test which ever doesnt pass wont come out in the output alright.

// part 34 okay lets goooo

// example 1 done

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evennumbers = numbers.filter(isEven);
// let oddnumbers = numbers.filter(isOdd);

// console.log(oddnumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }
// function isOdd(element) {
//   return element % 2 !== 0;
// }

// example 2

// const age = [16, 17, 18, 18, 19, 20, 60];
// const adults = age.filter(isAdult);

// console.log(adults);

// function isAdult(element) {
//   return element >= 18;
// }
