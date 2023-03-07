// alert("hello")

// functions :- [IMP]
console.log("Functions")

// syntax/formula/format

// regular/normal/function - common syntax
// () - parenthesis

// syntax ->
// function functionName(parameter1, parameter2, ...., parameterN [optional]) {
//   statements/instructions
//     console.log("hello");
// }

// example ->
console.log("print statement outside the function");

// define/declare

// console.log(" Example of Normal Function, without using parameters")
function add() {
  console.log("Function Call"); //6
}

console.log(5+5); //7

// // use/call
add(); 
add();


// console.log(" Example of Normal Function, with using parameters")

// ==================================================================
// manually taken values
function multiplication (num1, num2) {
           console.log(num1 * num2);     //paramerters & console spelling are same
}

multiplication(10,20);
multiplication(30,10);

//values taken from users

let number1 = Number(prompt("enter first number"));
let number2 = +prompt("enter secound number");

console.log("The Addition Is:" + (number1 + number2 ));

// =====================================================================

// Type Conversion
let isBlue = true;

console.log(Boolean(0));

String(123);

Boolean(1);

Number("Welcome");
Number("150");
+"256";

// ==================================================================
// // Type Coercion -> (javascript)
let a = 5;
a = "Welcome to maxotag";

// function
function add() {
 let numberOne = Number(prompt("Enter First Number"));
let numberTwo = +prompt("Enter Second Number");
console.log("The Addition Is:" + (numberOne + numberTwo ));
}
add();
add();
add();

// functions with parameters -> (example 1)
function add(numberOne, numberTwo) {
 console.log("Addition Is :");
console.log(numberOne + numberTwo);
}
add(1,2);
add(2,2);
add(2,1);

//(example 2)
function printGrid(name) {
  console.log(`Hello ${name},Welcone To MxoTag Technology!`);
}

let userName = prompt("Enter Your Name");
printGrid(userName);

printGrid("onkar");// function call
printGrid("sushant");
printGrid("mahir");
printGrid("shubham");
printGrid("suraj");

// ===================================================================
// return keyword (how to return value from function) ->

   let s = 5; //global scope

 function acceptNumber(){
 let a = +prompt("Enter Number");//10
 let b = +prompt("Enter second no.");
  
 console.log(s);//5
 console.log(a);//10
 console.log(b);
  // a-> local scope/block level scope/block scope

 return a,b //return some value to calling program

}

// acceptNumber();

console.log("value of s:" + s);//5
// console.log("value of a:" + a);//error - a is not define
console.log("value of a:" + acceptNumber ());//10
console.log("value of b:" + acceptNumber ());//10

// ==================================================================
// 1. function declaration/regular function/normal function [as seen above]

let number3 = Number(prompt("Enter three Number"));
let number4 = +prompt("Enter four Number");

console.log("The Addition Is:" + (number3 + number4 ));

// ==================================================================

// 2. function expression -> (function assigned to a variable)

// expression -> a + b;
// x + y = z

// let sum = 50; //expression
let min = function (){
 console.log("Hello");
}; //function expression

// console.log(sum); //prints entire function code
min(); //runs the function stored inside variable

// ===================================================================
// types of function expression -
// -> 1. Arrow Function (most populer)
// let sum = () => {} //syntax of arrow function

function sum(no1, no2){
 return no1 + no2;
}
  console.log(sum(10,20));

let mult = (no) => no*2;
console.log(mult(10));

// =====================================================================
// // -> 2. Annonymous function (function without any name)//hackers website
// let sum = () => {}; //no name
// let add = function () {}; //no name
 
// sum();
// add();

let div = (no) => no/2;
console.log(mult(10));


// ====================================================================
//IIFE [Immediately Involked Function Expression]

// 1. using arrow function 

// 1)
((studentName) => {
  let studentAge = 15;
  console.log("studentName :" + studentName + "| Age : " + studentAge);
})("satish");

// 2)
((studentName) => {
  let studentAge = 22;
  console.log("studentName :" + studentName + "| Age : " + studentAge);
})("rahul");


// // // 2. using normal function 
(function (name) {
  let age = 23;
  console.log("Name :" + name + "| Age : " + age);
})("onkar")

