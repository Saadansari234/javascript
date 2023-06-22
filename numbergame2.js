///////////////////////////////////////////////trial two///////////////////////////////
//   let attempts=0;
//   let resultmessage = document.getElementById("resultmessage")
//   // Increment attempts
// attempts++;

// // Update attempt count on the page
// const attemptCountElement = document.getElementById('attemptCount');
// attemptCountElement.textContent = attempts.toString();

// if (attempts == 5) {
//   resultmessage.innerHTML= `Game over! You reached the maximum number of attempts. The correct number was ${targetNumber}.`

// }


// }


let number = [Math.floor(Math.random() * 100) + 1]
let attempt = 5 ;


function handlebtn() {
  let btn= document.getElementById("btn")
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let resultmessage = document.getElementById("resultmessage");
  let attemtscounter= document.getElementById("attemtscounter")

  //let give condition to the input

  if (input == number) {
    output.innerHTML = `you guess right , your answer was ${number}`
  } else if (input < number) {
    attempt--;
    if (attempt === 0 ) {
      resultmessage.innerHTML = `better luck next time. the right number was ${number}`;
      attemtscounter.innerHTML = `${attempt}`;
      
    } else {
      output.innerHTML = 'your number is too low!';
      attemtscounter.innerHTML = `${attempt}`;
    }
    console.log("attempt");
   
  }

  if (input > number) {
    attempt--;
    if (attempt === 0 ) {
      resultmessage.innerHTML = `better luck next time. the right number was ${number}`;
      attemtscounter.innerHTML = `${attempt}`;

    } else {
      output.innerHTML = 'your number is too high!';
      attemtscounter.innerHTML = `${attempt}`
    }
    console.log("attempt");
  }

}

function reset() {
  document.getElementById("input").value = "";
  output.innerHTML = "We have selected a random number between 1 - 100. See if you can guess it."
  attempt = 5 ;
}




// ///////////////////////////////////////trial three////////////////////

// let btn= document.getElementById("btn");


// let number= [Math.floor(Math.random()* 100)+ 1]
// var attempt=3;

// function handlebtn() {
//     let input= document.getElementById("input").value;
//     let output= document.getElementById("output");

//     if(input==output){
//      alert("congratulation");
//     }

//       else if(input<output){
//       attempt--;
//       if(attempt===0){
//         alert("try smaller number");
//         alert("you are blocked");
//       }else{
//         alert("try smaller number");
//       }
//       console.log("attempt");


//     }else{
//       attempt--;
//       if(attempt===0){
//         alert("try greater number");
//         alert("you are blocked");
//       }else{
//         alert("try greater number");
//       }
//       console.log("attempt");
//     }




