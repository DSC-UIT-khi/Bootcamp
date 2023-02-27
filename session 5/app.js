// alert in simple popup
// alert("This is alert");

// variables
// var name = "Hadi"; // data type string
// var numbers = 321; // data type number

// illegal variable name
// var hjsdah32189712 = "number";

// operators
// var add = 2 + 2;
// var subtract = 2 - 2;
// var multiplication = 2 * 2;
// var division = 2 / 2;

// var name = "Hadi";

// alert(name);

// var num = 5;
// var add = num++; // post increment
// var add = ++num; // pre increment

// var subtract = num--;

// alert(subtract);

// concatenation
// alert("My name is " + "Hadi Haider");

// prompt
// var username = prompt("What is your name?");

// alert("Your name is " + username);

// conditional statements
// var num1 = 12;
// var num2 = 15;
// var num3 = 17;

// if (num1 > num2) {
//   alert("Number 1 is greater");
// } else if (num3 > num1) {
//   alert("Number 3 is greater");
// } else {
//   alert("Number 2 is greater");
// }

// Arrays
// var fruits = ["Apple", "Banana", "Watermelon"];
// alert("Before " + fruits);
// fruits.push("Grapes"); // add any value at the last index of the array
// alert("After " + fruits);

// fruits.pop(); // remove the last index of the array
// alert("After " + fruits);

// fruits.shift(); // remove the first index of the array
// alert("After " + fruits);

// fruits.unshift("Grapes"); // adds any value at the beginning of the array
// alert("After " + fruits);

// fruits.splice(1, 1, "Grapes"); // adds and remove the index
// alert("After " + fruits);

// alert(fruits.slice(0, 2));

// scope of the variables
// var name = "Hadi"; // global scoped
// let name1 = "Hadi";
// const name2 = "Hadi";

// alert("before " + name2);
// // name = "Haider";
// name2 = "Haider";
// alert("after " + name2);

// functions

/**
 * How to use functions??
 */

// function definition
// funtion declaration
// function call

// const username = prompt("Enter your name!");

// functions with parameters

// function dummy(username) {
//   alert(username);
// }

// dummy("Hadi");

// Pass data back from functions
// function getName() {
//   let username = "Hadi Haider";

//   return username;
// }

// var function_call = getName();

// alert(function_call);

// Events for button
function showPopup() {
  alert("Hey to the boring lecture");
}
