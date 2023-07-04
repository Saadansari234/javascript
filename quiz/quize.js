
const quizDB = [
    {
        question: "Q1. Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js>",
        c: "<javascript>",
        d: "<scripting>",
        ans: "ans1"
        //ans1
    },
    {
        question: "Q2. How do you write 'Hello World' in an alert box?",
        a: "alertBox('Hello World');",
        b: "msgBox('Hello World');",
        c: "msg('Hello World');",
        d: "alert('Hello World');",
        ans: "ans4"
        //ans1
    },
    {
        question: "Q3. How does a FOR loop start?",
        a: "for (i = 0; i <= 5; i++)  ",
        b: "for (i = 0; i <= 5)",
        c: "for (i <= 5; i++)",
        d: "for i = 1 to 5",
        ans: "ans1"
        //ans1
    },
    {
        question: "Q4. How do you find the number with the highest value of x and y?",
        a: "top(x, y)",
        b: "Math.max(x, y)  ",
        c: "Math.ceil(x, y)",
        d: "ceil(x, y)",
        ans: "ans2"
        //ans2
    },
    {
        question: "Q4. Which event occurs when the user clicks on an HTML element?",
        a: "onmouseclick",
        b: "onmouseover",
        c: "onclick",
        d: "onchange",
        ans: "ans3"
        //ans3
    },

]


let question = document.getElementById("question");
const opt1 = document.querySelector("#opt1");
const opt2 = document.querySelector("#opt2");
const opt3 = document.querySelector("#opt3");
const opt4 = document.querySelector("#opt4");

let i = 0

const loadquestion = () => {
    const currentQuestion = quizDB[i]; // Get the current question from the quizDB array
    question.innerText = currentQuestion.question; // Set the question text

    // Set the answer choices for the options
    opt1.innerText = currentQuestion.a;
    opt2.innerText = currentQuestion.b;
    opt3.innerText = currentQuestion.c;
    opt4.innerText = currentQuestion.d;
}

loadquestion();



//now we have to get the id of our options and see if its match with the correct answer.
const answers = document.querySelectorAll(".answer");

const submit = document.querySelector("#submit");
let showscore= document.querySelector("#score");


const getanswers = () => {

    let ans;
    answers.forEach((currentans) => {
        if (currentans.checked) {
            ans = currentans.id;
        }
    })

    return ans;
};
//this is for deselect the previoous option
const deselectall = () =>{
    answers.forEach((currentans)=>{
        currentans.checked= false;
    })
}
let score = 0

submit.addEventListener("click", () => {
    const checkedanswer = getanswers();
    console.log(checkedanswer);


    if (checkedanswer === quizDB[i].ans) {
        score++
    }
    
    deselectall();//this function will deselect the option we have selected in the previouus question. function is above
    i++

    if (i < quizDB.length) {
        loadquestion()
    } else {
    showscore.innerHTML= `
        <h3>you scored: ${score}/${quizDB.length} 😃 </h3>
        <button class="btn" onclick="location.reload()"> Retake <button>
    `
showscore.classList.remove("scorearea");
    }


});









