// Variables : (use to store data)

// 1. Let
        //    block level element

// let firstName = "onkar";
// console.log(firstName)
//   firstName="kiran";
// console.log(firstName)

// 2. Var
        //  global


//  var lastName = "kakade";
// console.log(lastName)
//  var  lastName="more";
// console.log(lastName)       


// control stracture


// {
//   let firstName= "onkar";
//   var lastName= "kakade";
  
// }

// console.log(firstName);
// console.log(lastName);


// 3. Const
        //    block level element (always use upper case)

// const PI = 3.14;
// console.log(PI)
    //   PI = 7;     uncaught type error

// always use upper case , camelCase



// Naming Conventions :

// 1. name must contain only letters, digit or symbols($ and _)
// eg:
// let onkar = 5;
// let onkar012=5;
// let onkar$_012=5;

/* 2. first character must not be digit
  eg

  let 1name = "onkar";     error*/

  /* 3. use camelCase
  let firstName = "onkar";
  let studentRollNumber = 8; */

//4. No duplicate Names
//   eg. 
//    let firstName = "onkar";
//    let firstName = "kakade";
//    console.log(firstName);

// 5. case matter

// let firstName= "onkar";
// console.log(firstname)    error

// 6. Using reserved name not allowed
// eg : let,var,const,use strict.etc
// let var = "onkar";      error
  

//7.  an assignment without let/var/const keyward while using "use strict";
// eg
// "use strict";
/*  firstName= "onkar"; 
  console.log(firstName)    error */

// 8. Const variable name shound be upper case
// eg
// const PI = 3.14;
// const NAME = "onkar";

// 9. use human redable name
// eg
// let jsfghsdfjasdfjhf = 5;      its not showing error but its wrong way

// 10. no short names
// eg
// let stdno = 10;                    its not showing error but its wrong way



// ------------------------------------------------------------------------------------------------------------------------------------------------
// Task 

//  1. Declare a variable called myName. Initialize myName with a suitable value
      let myName = "Onkar";
      console.log(myName);

//  2.Declare a variable and assign a value. Values can be of any  datatype such as string, number, Boolean, etc.
     let a = 1;
     let b = "kakade";
     let c = true;
     console.log( typeof a,typeof b, typeof c )

//  3. Use the let keyword to declare a variable.
   let lastName = "kakade";
   console.log(lastName);

//  4. Create a variable called z, assign x + y to it, and display the result in an alert box.
     let x = 5;
     let y = 5;
     let z = x+y;
     alert(z);
//  5. Create a variable called s, assign the value 50 to it.
      let s = 50;
      console.log(s);
     
//  6. Multiply 10 with 5, and alert the result:
      alert(10*5);

//  7.Divide 10 by 2, and alert the result:
      alert(10/2);

//  8.Use the correct assignment operator that will result in x being 15 (same as x = x + y).
       
x = 5
y = 10
x+=y;
console.log(x);

// Provide a suitable example for each data type and print it to the console.

// 1.number
test = 25;
console.log(typeof test); //number

// 2.string
stuName = "onkar"
console.log(typeof stuName); //string

// 3.boolean
test = true;
console.log(typeof test); //boolean

// 4.undefined
let raju;
console.log(typeof raju );//undefined

//5.null
const n = null;
console.log(typeof n);//object


