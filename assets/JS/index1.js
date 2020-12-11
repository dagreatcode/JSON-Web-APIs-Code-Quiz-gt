//Adding Variables
var countdownElement = document.querySelector(".countdown");

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
            startTimer();
            startQuiz();
        }
    }, 1000);
};

function startTimer() {
    var timerInterval = setInterval(function () {
    timer2--;
    countdownElement.textContent = timer2 + " seconds until finished";
        if(timer2 === 0) {
            clearInterval(timerInterval);
            // prepareQuiz();
        }
    }, 1000);
};

var questions = [
    "Question1 A,B,C, or D",
    "Question2 A,B,C, or D", 
    "Question3 A,B,C, or D",
    "Question4 A,B,C, or D", 
    "Question5 A,B,C, or D", 
];

function startQuiz() {
console.log("randomQuestionArray", questions);
};