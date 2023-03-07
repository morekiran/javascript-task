// Array [IMP]
// - array is an collection of multiple data elements/values.
// - javascript arrays are homegeneous as well as hertrogeneous.
// - there is no fix size to javasript arrays.

// array methods and functions ->
// Basic Operations [Adding and removing]
// 1. push => add nwe element at the end
     const numbers = [1,2,3,4,];
     numbers.push(5);
     console.log(numbers);

// 2. pop => delete last element
    const number = [1,2,3,4,5,6];
    numbers.pop(0);
    console.log(number); 
    
// 3. unshift => add new element at start 
    const student = [1,2,3,4,5,6,7];
    numbers.unshift();
    console.log(student);
    
// 4. shift => delete new element from start
    const students =[1,2,3,4,5,6,7,8];
    numbers.shift();
    console.log(students);  

//===================================================================== 
// Modifying Array => 

// 1. splice => add,update,delete the element of the array
// Position to add the Element
// No of elements to delete 
// Actual element to be added
    //  example 1
    const arrNumbers = ["one","two","three"];
    arrNumbers.splice(1,0,"four");
    console.log(arrNumbers);
    //  example 2
    const studentIndex = ["onkar","sahil","sanam"];
    studentIndex.splice(1,2,"santosh");
    console.log(studentIndex);

// 2. slice => Used to copy or entire or partial array
    //   We copy / create a small array out of a big one 
    //  example 1
    let fruits = ["apple","mango","orange"];
    let fruitsCopy = fruits.slice();
    console.log(fruits);
    //  example 2
    let studentName = ["santosh","sonal","onkar","amol"];
    let studentNameCopy = studentName.slice(1,2);
    console.log(studentNameCopy);

// 3. concat =>  
// example 1
 let sirName = ["more","kale","kakade","jadhav"];
 let moreSirName = ["more","uchale","gaikwad"];
 let allSirName = sirName.concat(moreSirName);
 console.log(allSirName);

// example 2 
 let indexNum = ["1","2","3","4"];
 let moreIndexNum = ["5","6","7"];
 let allIndexNum = indexNum.concat(moreIndexNum);
 console.log(allIndexNum);

 // 4. fill => Used to fill the entire array with given element.
// example 1
 let indexNo = [1,2]
    indexNo.fill(3);
    console.log(indexNo);

// example 2 
let index = [4,5]
index.fill(6);
console.log(index);


// 5. toString => from array to comma seperated string
// example 1
 let massage = ["hello","welcome","maxotag technology"];
 massage.toString();
 console.log(massage);

// example 2
let massage2 = ["hello","welcome","to indian idal"];
massage2.toString();
console.log(massage2);

// 6. join => from array to string seperated with given chars
// example 1
let vegitables = ["tomato","potato","muttor"]
vegitables.join(" ");
 console.log(vegitables);

// example 2
const content = ["1","2","3","4"] 
content.join(" ");
console.log(content);

//======================================================================

// Searching & Sorting =>

// 1. sort => used to sort the array  in ascending order 
// example 1
 let letter = ["Apple","Emran","Orange","Diksha"]
 letter.sort();
 console.log(letter);

// 2. includes => returns true if given element exists in the array otherwise returns fale 
// example
 let fruitsNo = ["orange","mango"]
 let isOrangeAvailable = fruitsNo.includes("strobery")
 console.log(isOrangeAvailable);

 // 3. index of => returns indexNo of the given element (if exists) in the array otherwise returns -1 (if not present)
 let indexNumber = ["orange","mango"]
 let orangeindex = indexNumber.indexOf("mango")
 console.log(orangeindex)

// 4. reverse =>
 // example 1
let letters = ["Welcome","Maxo","Tag","Technology"]
let ascendingLetters = letters.sort();
console.log(letters);

// example 2 
let course = ["Welcome","Maxo","Tag","Technology"]
let ascendingCourse = course.sort();
let descendingCourse = ascendingCourse.reverse()
console.log(descendingCourse);

//======================================================================
// Static Array Methods =>

// 1. array.from () => convert any valid string or object into an array.
// example
const letterNO = Array.from("onkar");
console.log(letterNO);

// 2. Array.of () => converts any numbers of comma seperated elements into a array.

// example
 const article = Array.of("orange","yellow",2);
 console.log(article);

// 3. Array.isArray() => return true if given value is an array otherwise it returns false value.
// example 1
const articleName = Array.isArray(["sohel","khan"]);
console.log(articleName);

// example 2
const name = Array.isArray("ajit");
console.log(name);

// ===================================================================

// Array iterator methods (MOST IMP) 
// 1.map -> (transform an array)
// example 1 ->
const names = ["onkar", "ajay","sajit","sohel"];

console.log(names);

const res  = names.map((name, index) => {
    console.log("Student Name:" + name);
    console.log("Index Is : " + index);

    return "sujit";
});
console.log(res);

// //example 2 ->

const rollNo = [1,2,3,4,5,6,7,8,9,10];

const doubledNumbers = rollNo.map((number) => {
    console.log(number);

    return number *2;
});

console.log(rollNo);
console.log(doubledNumbers);

// 2.filter -> (to filter the records)

   const tv = [
    {
        brand: "LED",
        model: "LED tv",
        price: "400000",
    },
    {
        brand: "samsung",
        model: "samsung pro",
        price: "900000",
    },
    {
        brand: "apple",
        model: "tv 12 max pro",
        price: "80999",
    },
    {
        brand: "realme",
        model: "realme C2",
        price: "700000",
    },
  ];
// example 1 ->   
       const realmetv = tv.filter((tv) => {
        console.log(tv.brand);

         if (tv.brand == "realme") {
            return true;//truthy
         }
       });
            console.log(realmetv);

// example 2 ->
     const under10k = tv.filter((tv) => {
      console.log(tv.brand);

     if (tv.price <= 10000) {
        return true;//truthy
     }
   });
        console.log(under10k);
        
// 3.reduce (multiple value add karun ekach result deto [1,3,4,5,]; =13)
       const counter = [1,2,3,4,5,6,7,8,9];
       const finalResult = counter.reduce((result,number) => {
        result = result + number; // + cha jagi aapan konte pn opertors gheu shakto
        return result;
       });
     console.log(finalResult);

// 4.forEach -> 

    const result = names.forEach((name,index) => {
    console.log("student Name:" + name );
    console.log("Index Is:" + index);
});

     console.log(result);//undefined


