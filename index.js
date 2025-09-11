// console.log("Hello, World!");
// console.log("i like pizza lol.");

// window.alert("Hello, World!");
// window.alert("i like pizza lol.");

// document.getElementById("myids").textContent = `Hello, World!`;
// document.getElementById("myps").textContent = `I like pizza lol.`;

// talked about basics of html and we entered variables talked about decleation and assignment
// we then entered data types and how to use them in js
// we also talked about how to use console.log and window.alert to display messages
// we also talked about how to use document.getElementById to change the content of html elements
//  we use "my name" to start a string thats what makes it a string the column in it so it different form just saying my let name = john or my name = "john"

// let age = 25;
// let price = 10000;
// let gpa = 3.5;

// let firstname = "John";
// let favoritefood = "pizza";
// let gmail = "bro123@gmail.com";

// entreing boolean and they are mostly what we call true or false statements lol

// let fullname = "John Doe";
// let age = 25;
// let isStudent = true;

// document.getElementById("p1").textContent = `my name is ${fullname}`;
// // This is a template literal that allows us to embed variables directly into the string.
// document.getElementById("p2").textContent = `am ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled ${isStudent}`;

// artithmetic operators

// (+,- *, /,%, **  )

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students ** 2;
// students = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students **= 2;
// students %= 2;

// operator  precedence
// 1. Parentheses
// 2. Exponentiation
// 3. Multiplication and Division
// 4. Addition and Subtraction

// let results = 1 + 2 * 3 + 4 ** 2;

// console.log(results);

// we have entered part 4
// how to enter user input
//  there are 2 ways
// easy way = windows prompt
// professional way = using html form elements

// let username;

// username = window.prompt("Enter your name:");

// console.log(username);

// easy way done
// now we will use html form elements to get user input

// let username;

// document.getElementById("mysubmit").onclick = function () {
//   username = document.getElementById("mytext").value;
//   document.getElementById("myh1").textContent = `Hellllo ${username}`;
//   console.log(username);
// };

// part5
// data  type conversion

// let age = window.prompt("Enter your name:");
// age = Number(age); // Convert the input to a number
// age += 1;

// console.log(age, typeof age); // Output the age and its type

// part 6
// js constants
// constants are variables that cannot be changed after they are declared
// they are declared using the const keyword

// const PI = 3.14;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle:");
// Convert the input to a number

// document.getElementById("mysubmit").onclick = function () {
//   radius = document.getElementById("mytext").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myh3").textContent = circumference + "cm";
// };

// part 7
// counter project done

// part 8
// math object
// Math object is a built-in object in JavaScript that provides mathematical constants and functions

// Math object is used to perform mathematical operations in JavaScript
// console.log(Math.PI);
// console.log(Math.E);

// let x = 10;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.ceil(x);
// z = Math.floor(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
//  z = Math.abs(x);

// console.log(z);

// am at if statements now lets gooooo

// let isStudent = true;

// if (age >= 18) {
//   console.log("You ar old enough to enter ");
// } else {
//   console.log("You must be up to 18 to enter this site  ");
// }

// time example done lol
// if (time < 12) {
//   console.log("Good morning");
// } else {
//   console.log("good afternoon");
// }

// boolean variable if statements exampls

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are not a student");
// }

// nested if statements next lets go
// let age = 18;
// let haslicense = true;

// if (age >= 16) {
//   console.log("You are old enough to drive");

//   if (haslicense) {
//     console.log("You have ur license");
//   } else {
//     console.log("you do not have a license");
//   }
// } else {
//   console.log("You must be 16+ to drive ");
// }

// else if statements

// const mytext = document.getElementById("mytext");
// const mysubmit = document.getElementById("mysubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mysubmit.onclick = function () {
//   // age = mytext.value;
//   age = Number(mytext.value); // Convert the input to a number

//   if (age >= 100) {
//     resultElement.textContent = "You are too old to enter this site";
//   } else if (age == 0) {
//     resultElement.textContent = "You were just born, you can't enter this site";
//   } else if (age >= 18) {
//     resultElement.textContent = "You are old enough to enter this site";
//   } else if (age < 0) {
//     resultElement.textContent = "Age cannot be less than 0";
//   } else {
//     resultElement.textContent = "You must be 18+ to enter this site";
//   }
// };

// checkd property part 11

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const masterbtn = document.getElementById("masterbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function () {
  if (mycheckbox.checked) {
    subresult.textContent = "You are subscribed!";
  } else {
    subresult.textContent = "You are not subscribed.";
  }

  if (visabtn.checked) {
    paymentresult.textContent =
      "You have selected Visa as your payment method.";
  } else if (masterbtn.checked) {
    paymentresult.textContent =
      "You have selected MasterCard as your payment method.";
  } else if (paypalbtn.checked) {
    paymentresult.textContent =
      "You have selected PayPal as your payment method.";
  } else {
    paymentresult.textContent = "Please select a payment method.";
  }
};

// part 12 didnt write about tenary operators
// tenary operators
//  ? = when , : = else
// part 13

// switch statments
// so its used when you have multiple else if statements that check the same variable

// let day = "pizza";

// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log(`${day} is not a day`);
// }
