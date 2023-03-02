// alert("Hello world");

// variables

// Global Scoped
// var name = "Hadi";

// Block variable
// let bootcampSession = "7";

// For the constant variables
// const pi = "3.14";

// name = "8";

// name = "Hadi";
// pi = 3.14;

// variable name must not start with numbers
// var 312879 = "3.14";
// var name12 = "Hadi";
// var name-hadi = "Haider"

// Concatination
// var name = "Hadi" + " " + "Haider";
// var numbers = 10 + 10;

// console.log(numbers);
// document.write(numbers);

// Prompt
// const userInput = prompt("Enter your username ");
// console.log(userInput);
// document.write(userInput);

// let students = ["Hadi", "Haider", "Hamza"];

// Copy the elements of an array
// console.log(students.slice(0, 3));

// students.splice(0, 2);
// console.log(students);

// students.pop();
// students.shift();
// console.log("Before", students);
// students.unshift("Haroon");

// console.log("After", students);

// for(variable initialization; conditional statement; increment/decrement){}
// for (var i = 1; i < 7; i++) {
//   console.log("For loop", i);
//   if (i % 3 === 0) {
//     break;
//   }
// }

// post increment by one
// i = i + 1;
// i++;

// i--;

// pre increment by one
// ++i;
// var num = 2;
// var j = ++num;
// console.log(j);
// console.log(num);

// let username = "HADI";
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());

// let students = ["Hadi", "Haider", "Hamza"];
// console.log(students.length);

// let myName = "Hadi";
// let replaced = myName.replace("di", "bdajkhjk");
// console.log(myName.charAt(2));
// console.log(replaced);
// let num = 23.412321;
// console.log(num.toFixed(0));

// console.log(Math.random().toFixed(2));

// Functions
// function keyword
// Arrow function

// function userInput() {
//   const data = prompt("Enter your name: ");
//   console.log(data);
// }

const userInput = () => {
  const data = prompt("Enter your name: ");
  console.log(data);
};

userInput();
