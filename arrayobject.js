// array object for company employes 

var employsdetails = [
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

//for employ details//
for (var i=0 ; i<= employsdetails.length ; i++) {
    console.log (employsdetails[i])
}
 
//for employ status
// for (var i=0 ; i<= employsdetails.length ; i++ ) { if (employsdetails[i].is_enroll < 1) {
    // console.log (employsdetails[i])
// }
     
// }

//for employs name 
for (var a=0 ; a<=employsdetails.length ; a++) {
    console.log (employsdetails[a].name)
} 


// // for each example 
// var uniquedep= [];

// employsdetails.forEach (function (value,) {
//     var isnotunique = uniquedep.includes(value.department);

//     if (!isnotunique) {
//         uniquedep.push (value.department);
//     }
// }
// )

// //  console.log (uniquedep);


 


