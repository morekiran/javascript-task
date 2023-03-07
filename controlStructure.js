// contol stuctores -> task

// if-else =>
// 1. Check if a number is odd or even and print on console

const number = prompt("Enter a number:");

// check if the number is even =>
if (number % 3 == 0) {
        console.log("The no is even.");
}
// if the number is odd =>
else{
        console.log("The no is odd");
}

// 2. Find the largest of two number

let number1 = 10, number2 = 2;

if (number1 == number2)
   console.log("both are equal");
   else if (number1 > number2)
   console.log(number1 + "is greater");
else{
    console.log(number2 + "is greater");
}   

// 3. Perform arithmetic operations on two numbers

     let a = 7;
     let b = 5;
     console.log(a+b)//
     console.log(a*b);//20
     console.log(a/b);//1.25
     console.log(a-b);//1
     console.log(a%b);//1
     console.log(a**b);//625
     console.log(++a);//6
     console.log(b--);//4

// For loop =>
// 1. Write a JS code to print numbers from 1 to 10
for (let i =1; i <= 10; i++) {
    console.log(` ${i} `);
}
// 2. Write a JS code to find the power of a number using for loop
for (let i =1; i <= 10; i++) {
    console.log(` ${i**3}`);
}
// 3. Write a JS code to print Even numbers
for (let s = 1; s<= 10;s++){
    if (s % 2 !==1)
    console.log("even value"+s);
}
   
// Create a simple calculator using switch statement.
// 1. accept two numbers from user
// 2. display the menu to user and accept the input as a sign (operator)
// menu ->
// + => addition, 
// - => substraction
// * => multiplication
// / => division
// % => mod
// ** => power
// 3. display/write the output on the screen. (e.g. Addition = 45)

let numberOne = +prompt("Enter First Number");
let numberTwo = +prompt("Enter Second Number");


let choice = prompt(`choose the operators
1. +  addition
2. -  substraction
3. *  multiplication
4. /  division
5. %  mod
6. ** power 
`)

switch(choice) {
    case "+":
    console.log(numberOne + numberTwo);
    break;
    case "-":
    console.log(numberOne - numberTwo);
    break;
    case "*":
    console.log(numberOne * numberTwo);
    break;
    case "/":
    console.log(numberOne / numberTwo);
    break;
    case "%":
    console.log(numberOne % numberTwo);
    break;
    case "**":
    console.log(numberOne ** numberTwo);
    break;
    default: console.log("please choose the operator");
}