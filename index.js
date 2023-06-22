// practice of sesiions //

//types of data//

//1. integer number//
number=123
// console.log (number)

//2.string data//

var fullname ='saad ansari'
// console.log (fullname)

//3.booleam//

var balanceamt=9000
//  console.log (balanceamt)
 var withdraw=2000
 
 withdraw<=balanceamt
 
//  console.log (withdraw<=balanceamt)

 //4.null//
 var surname= 'null'
//  console.log (surname)
 

                                                    
/////////////////////////////////////////operators////////////////////////////////////////////////////

//1.arithmetic operators///
//addition//
var blacksheeps=1000
var whitesheeps=2000
 totalsheeps=1000+2000

// console.log (totalsheeps)

//	Modulus (Remainder)//
//1.type//
Modulusremainder = 1000%2000
// console.log (Modulusremainder)
//2.type//
a = 3
// console.log ( a%=2)
//it define even and odd//




//2.comparison operators //
blacksheeps==whitesheeps
// console.log (blacksheeps==whitesheeps)
//both sides values should be equal like white sheep 1000 and blacksheep 1000 then it will show true and === this will only apear true//
//when the data types and value are same//

//////////////////////////////////////////////////////Array[]////////////////////////////////////////

customername= ['raja','baja','khaja']
// console.log(customername)
//we can also create an empty arey//
customername=[]
// customername.push ('akbar')
// customername.push ('birbal')
// customername.push ('mumtaz')
// console.log(customername)

//to see how much names are there//

// console.log (customername.length) 

//to add someone else name and remove ones name//
customername[1]='mumtaz2.0'
// console.log (customername)


////////////////////////////////objects{}///////////////////////

customerdetails = {
    name: 'shahjahan badshah',
    number: '67890',
    adress: 'tajmehel',
    
        }

// console.log (customerdetails["name"])

number1=100
number2=10
// console.log (number1/number2)


//looping injavascript//
const friendsname= ['saad','osama','sami','kashif','zayad']

for (let i = 2; i <= friendsname.length; i++) {
    // console.log (friendsname[i])
    
}
//while loop


var a=1

while (a<=10) {
    // console.log ("techpatshala");
    a++;
}



var b=1 
var str=""

while (b<=10) {
    str = 'number' + b;
    b++;
    // console.log (str)
}


// do while loop 

var c=1

do {
//   console.log('hello world');
  c++
} while (c <= 10)

//template literals

const name= "saad"
const session= "reactjs"
const text= `hello ${name}, welcome to ${session}`;

// console.log (text)


//single line es6 upgraded arrow function 
const squareofnumber = number=> number * number
//  console.log (squareofnumber (10))


//multiple line es6 upgraded arrow function
const iseven = (number) => {
if (number % 2 === 0) {
    return true;
}
return false;
}

// console.log (iseven (15))

//spread operator
const detais= {
    skills:"reactjs",
    location:"vikhroli",
}

const newdetails = { 
    name:"saad",
    ...detais
};

// console.log (newdetails)

//rest parrametere

function values (a, b, ...c){
    console.log (a,b,c)
}

values (1,2,3,4,5,6)





















