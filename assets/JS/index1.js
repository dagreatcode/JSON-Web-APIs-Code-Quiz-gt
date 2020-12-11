//Adding Variables
var countdownElement = document.querySelector(".countdown");
var buttonElement = document.getElementById("submit");
var questionsEl = document.getElementById("allQuestions")

var score = 0;
var timer = 10;
var timer2 = 99;

prepareQuiz();

// //Adding my Functions
function prepareQuiz() {
    //My Nice Timer
    var timerInterval = setInterval(function () {
    timer--;
    countdownElement.textContent = timer + " seconds until we start the Code Quiz.";
        if(timer === 0) {
            clearInterval(timerInterval);
            selectAndDisplayQuestion();
            startTimer();
         
            // startQuiz();
        }
    }, 1000);
};

function startTimer() {
    var timerInterval = setInterval(function () {
    timer2--;
    countdownElement.textContent = timer2 + " seconds until finished";
        if(timer2 === 0) {
            clearInterval(timerInterval);
            prepareQuiz();
        }
    }, 1000);
};

var questions = [
    {
        question: "Question 1: A,B,C, or D",
        answer: "a",
    },
    {
        question: "Question 2: A,B,C, or D", 
        answer: "b",
    },
    {
        question: "Question 3: A,B,C, or D",
        answer: "c",
    },
    {
        question: "Question 4: A,B,C, or D", 
        answer: "d",  
    },
    {
        question: "Question 5: A,B,C, or D", 
        answer: "a",
    },
    {
        question: "Question 6: A,B,C, or D", 
        answer: "b",
    },
    {
        question: "Question 7: A,B,C, or D", 
        answer: "c",
    },
    {
        question: "Question 8: A,B,C, or D", 
        answer: "d",
    },
];

// function startQuiz() {
//     console.log(question);
// };

function selectAndDisplayQuestion(){
    console.log("RandomQuestionArray", questions);
    var randomIndex = Math.floor(Math.random() * questions.length);
    console.log("RandomIndex", randomIndex);
    console.log("Element", questions[randomIndex]);
    questionsEl.textContent = questions[randomIndex].question + " - " + questions[randomIndex].answer;
};

selectAndDisplayQuestion()

buttonElement.addEventListener("click", function(){
    selectAndDisplayQuestion()
});