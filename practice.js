// var a=10;
// var b=20

// // if (a==10) {
// //     console.log ("a=20")
// // }

// // if (b==20) {
// //     console.log ("b=10")
// // }

// // var a=10
// // var b=20
// // var c= [a,b]==[b,a]

// // console.log (c)

// // for (var i=0; i )





// //find 'MAM' is palindroms

// let x = "MAM"
// let y = ['M','A','M']

// for (i=0 ; i<=y.length ; i++) {
//     for (j=0 ; )
// }

//task1: find number of vowels in a strin

 
function vowelsfinder() {
    let a= "saadansari"
    //lets find
    let b= a.split("")
    let c= ['i','o','u','e','a'];
 let d= [];
 
    b.forEach( (value)=>{
        if (c.includes(value)){
           d.push(value)
        }
    })
    return d.length
}

// console.log(vowelsfinder())


//task2: if a=10 and b=20 then convert a=20 and b=10

//method 1
function method1() {
    let a=10
    let b=20
    
    let temp= a;
    a = b;
    b= temp;
    
  let c= [a , b]; 
  let d= c.join('\n')
  return d;
}

// console.log(method1())

//method 2

function method2() {
    let a= 10;
    let b= 20;

  [a, b] = [b, a];

 c= [a, b]
 d= c.join("\n")
 return d;
}

// console.log(method2())


//task3: find missing numbers from arr= [1,3,4,9,10] from n=10 

function numberfinder() {
  let  arr= [1,3,4,9,10];
let n= [1,2,3,4,5,6,7,8,9,10]
let m = []
//then find missing numbers from array we use split to make n string into an
//array and after that we have to itttirate the and compare the values init .
//lets itterate the arrey and make a new function for it.

n.forEach((value)=>{
  if (!arr.includes(value)) {
    m.push(value)
  }
})

return m;

}

// console.log(numberfinder())


//task4: find if a string is palindrom or not 
let value= "mam";

const palindrom = () =>{

//we will use reverse method and apply condition 

//first we will change our number into strinfg  then split it into an arrey and then reverse and then again turn into an sting 
const myrev= value.split('').reverse().toString("");
console.log(typeof myrev)
console.log(myrev);

const myvalue= value.split('').toString("");  //we also have to change our first value from number to string
console.log(typeof myvalue)
console.log(myvalue);
// now we will apply consdition of true or falls to both strings to know if the first string and reverse string are palindrom or not 


if (myvalue===myrev) {
  console.log("palindrom")
}else{
  console.log("NOT a palindrom")
}}

palindrom();


// task
// 12345
// 1234
// 123
// 12
// 1


const pattern1 = () => {
  for (i=1 ; i<=5 ; i++){
    for(j=1; j<=i ; j++){
        console.log(i)
    }
    // console.log("\n")
  }
}

// pattern1()

setTimeout(function() {
  // console.log('Hello, world!');
}, 1000); // Executes after a 2-second delay



var counter = 0;

var intervalId = setInterval(function() {
  // console.log('Counter:', counter);
  counter++;

  if (counter === 5) {
    clearInterval(intervalId); // Stops the interval after 5 executions
  }
}, 1000); // Executes every 1 second





















