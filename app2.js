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

function add(x, y) {
  let sum = x + y;

  return sum;
  // could also call this return x+y; shorten the one above
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function isEven(number) {
  return number % 2 === 0 ? true : false;
  // this whole line of if statemtns code about to be shorten with a ternary operator lol
  // if (number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}
// function to check if an email is valid
// a valid email contains an "@" symbol
function isValidEmail(email) {
  return email.includes("@") ? true : false;
  // this is a simple way to check if an email is valid
}

console.log(isValidEmail("brocode@fate.com"));
console.log(isValidEmail("brocodefate.com"));

// console.log(isEven(21));
// console.log(divide(2, 3));
// and as for this one u can also do this console.log(add(2, 3)); // this will al(so work

// part 23
// varible scope
// read about it just watched he video
