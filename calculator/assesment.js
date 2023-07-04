//task1:compound interest 

const compoundint =()=>{
 // p is for principle amount , i is for interest rate , t is for time period
 // a represent interest on loan
 //b represent interest + loan amount(principle amnt)
    let p= 20000;
 let i= 1;
 let t= 3;

 let a = (p*i*t)/100;
 console.log (a)
let b= a+p;
console.log(b)

}
compoundint()


const ocurrenceofindel =()=>{

let a = "techpatashala";
let name= a.split("");
let counts= {}

for(let i=1 ; i<=name.length ; i++){
   const arrname= name[i];

   if (counts[arrname]== undefined ){
      counts[arrname]=1;
   }else {counts[arrname]=counts[arrname]+1}
   
}
console.log(counts)

}
ocurrenceofindel()

