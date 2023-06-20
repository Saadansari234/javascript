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




//now we will see what is the addition of all slarys and it will showw as copanies axpenses 

var totalexpenses= []
var totlsalary= []
var totldept= []
var sum = {
    hr: 0,
    cooking: 0,
    tech:0
};

employsdetails.forEach(function companyexpenses(value) {
    console.log({totldept, value})
    if (!totldept.includes(value.department)) {
        totldept.push(value.department);
    }
    // totlsalary.push(value.salary);
    sum[value.department]  += value.salary
})

console.log(sum)

