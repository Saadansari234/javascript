// array object for company employes 

const employsdetails = [
    {
        name: 'saad',
        email: "saadansari@gmail.com",
        address: "vikhroli",
        is_enroll: "1",
        department: "hr",
        salary: 20000,
        hr_id: 123,
    },
    {
        name: 'bhavin',
        email: "bhavin@gmail.com",
        address: "mulund",
        is_enroll: "0",
        department: "tech",
        salary: 25000,
        tech_id: 234,
    },
    {
        name: 'sanchit',
        email: "sanchit@gmail.com",
        address: "thane",
        is_enroll: "1",
        department: "tech",
        salary: 28000,
        tech_id: 345,
    },
    {
        name: 'amrit',
        email: "amrit@gmail.com",
        address: "bhandup",
        is_enroll: "0",
        department: "cooking",
        salary: 15000,
        cook_id: 456,
    },
    {
        name: 'vedia',
        email: "vedia@gmail.com",
        address: "badlapur",
        is_enroll: "1",
        department: "cooking",
        salary: 12000,
        cook_id: 567,
    }
]



//list all curent available eployees
//list all unique department
//expenses of all departments
//get employment details by their id (use function)


//list all current available

function enroled() {
    let enroledemp= [];
    employsdetails.forEach((value)=>{
        if (value.is_enroll==="1") {
            enroledemp.push(value.name);
        }
    })

    return enroledemp;
}
console.log(enroled())


//list all unique department


function alldepartments() {
   let uniquedep = [];
   employsdetails.forEach((value)=>{
    if (!uniquedep.includes(value.department)){
// uniquedep.push(value.department);
// uniquedep.push(value.salary);
  uniquedep[value.department]=value.salary;
    }
   })
   return uniquedep;
}

// console.log (alldepartments())


//expenses of all departments

const foreachproperties= () =>{
let arr= [200, 300, 400, 500, 600,]

arr.forEach((curntvalue, index , arr)=>{
    console.log(index + " " +curntvalue, arr[index]+100)
})

}

foreachproperties()






// var currentemploys = []

// employsdetails.forEach( function currentemploys(value,) {
//     if (is_enroll==1) {
//         currentemploys.push(value.name)
//     }
// // console.log(currentemploys)
// }
 
// )
// console.log(currentemploys)



// const arr = [{a: 1}, {a: 2}]        
// const values = [1,2];

// arr.forEach((v) => {
//     // {a:1}
//     if (v.a === 1) {

//     }
// })


// const students = [
//     { name: 'John', grade: 80 },
//     { name: 'Jane', grade: 90 },
//     { name: 'Adam', grade: 75 },
//     { name: 'Emily', grade: 95 }
//   ];
  
//   function getHighGrades() {
//     const highGrades = [];
  
//     students.forEach((student) =>{
//       if (student.grade >= 90) {
//         highGrades.push(student.name);
//       }
//     });
  
//     return highGrades;
//   }
  
//   const highGradeStudents = getHighGrades();
//   console.log(highGradeStudents); // Output: ['Jane', 'Emily']
  




































