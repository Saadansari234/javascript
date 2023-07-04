
//WHAT WE HAVE TO ADD
//1.OVER TIME & HIS SALARY ACCORDINGLY
//2.HIS joining & END DATE 
//3.HIS EXPERIENCE IN MONTH


class employees {
   constructor(fname,id,dept,salary){
      this.myname= fname
      this.myid= id
      this.mydept= dept
      this.mysalary= salary
   }
   
basicslalary(){

return this.mysalary;

}
}


class OverTime extends employees {
   constructor(fname,id,dept,salary,hours,Rate, Date1, Date2){
      super(fname,id,dept,salary)
      this.overtimehours= hours
      this.overtimerate= Rate
      this.startDate= Date1
      this.EndDate= Date2
   }

OverTimeCalculate(){
  const NormalSalary = super.basicslalary()

  const OverTimeSalary = this.overtimehours * this.overtimerate

  return NormalSalary+ OverTimeSalary
}

DateCalculate(startDate, EndDate){
   // const x= this.startDate
   // const y= this.EndDate
 const x= new Date(this.startDate)
 const y= new Date(this.EndDate)
 
   const TotalTime= Math.abs(y.getTime() - x.getTime()); 
const TotalDayss =  TotalTime / (1000 * 3600 * 24);
  return TotalDayss
}

}


const employdetails = new employees("saad ansari", "W3_01", "technology", 30000, 2 , 1000, "06/30/2022", "10/30/2022");
const OverTimeDEtails= new OverTime("saad ansari", "W3_01", "technology", 30000, 2 , 1000, "06/30/2022", "10/30/2022" );


const totalsalary = OverTimeDEtails.OverTimeCalculate();
const totalDays= OverTimeDEtails.DateCalculate();


console.log(OverTimeDEtails)
console.log("your salary after including overtime: "+totalsalary)
console.log("your total days is this company: "+ totalDays)








