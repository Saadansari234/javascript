
// this is our main function. you can call your function from main and added both the function 
class studentsDetails {
    //for properties
    constructor(fname,age,address){
    this.myname= fname;
    this.myage= age;
    this.myaddress= address;

    }
    //for methods or function
    details(){
     console.log(obj1)
    }
    biodata(){
        console.log(`hi how are you my name is ${this.myname} and my age is ${this.myage} and i live in ${this.myaddress}`);
    }
}



// this is our added function
class player extends studentsDetails{
    constructor(fname,age,address,games){
        super(fname,age,address)
        this.mygame= games;
    }
    player_details(){
        console.log(obj2);
    }
    player_biodata(){
        console.log(`hi how are you my name is ${this.myname} and my age is ${this.myage} and i live in ${this.myaddress} and i play ${this.mygame}`);
        
      }
}




//from here we will define properties to our class objrct and 
let obj1 = new studentsDetails("saad", 21, "vikhroli", "football");
let obj2 = new player("saad", 21, "vikhroli", "football");

obj1.details();
obj1.biodata();
obj2.player_details();
obj2.player_biodata();















