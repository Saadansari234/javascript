// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// // console.log(reverse_a_number(32243));




// function reverse(x) {
    
//     return x.split("").reverse().join("");
// }
// // console.log(reverse(123456))


//find the numbers of vowels from this name 

// let a= "saadansari"
// let b= "aeiou"
// let x= a.split('')
// let y= b.split('')


//let count = 0;

// for (const value of x) {
//   if (y.includes(value)) {
//     count++;
//   }
// }

// console.log(count);

// const person = {
//   name: "John",
//   age: 30,
//   profession: "Developer"
// };

// // console.dir(person)


// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 }
// ];

// console.table(people)

// the example of var variable

function example() {
  var x = "saad";

  if (x === "saad") {
    var x = "osama";
  
    console.log(x);
    // Expected output: 2
  }
  
  console.log(x);
  // Expected output: 2
    
}

example()


//exaple switch case 
let fruit = "apple";
let message;

switch (fruit) {
  case "apple":
    message = "Selected fruit is apple";
    break;
  case "banana":
    message = "Selected fruit is banana";
    break;
  case "orange":
    message = "Selected fruit is orange";
    break;
  default:
    message = "Unknown fruit";
}

console.log(message); // Output: Selected fruit is banana

// example of tarnary operator

let age= 15;
let group = (age >= 18) ? "You are an adult" : "You are a minor";

console.log(group); // Output: You are an adult

//array for each method its to manupilate values in a loop

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

// numbers.forEach((num) => {
//   console.log(num );
// });



//array for map its to manupilate value in arrey

// const doublednum= numbers.map( (num)=> {
// return num*4 ;
// })

// console.log(doublednum)


//example of filter in arrey

// const doublednum= numbers.filter( (num)=> {
//   return num% 2 ===0 ;
//   })
  
//   console.log(doublednum)
  


//example of reduce in array

// const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//destructuring array and object

let units = [1,2,3,]
let[a,b,c,] = units

console.log(a)


let students = {
  name: "saad",
  rollno : "1",
  stnd : "5th",
};
const { name, rollno, stnd } = students;

console.log (name)









