//Adding my Variables
var countdownElement = document.getElementById("countdown")
var currentQuestion = 0;
var score = 0;

var form = document.getElementById("form");
var questionElement = document.getElementById("allQuestions");
var questionText = document.getElementById("text");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var nextButton = document.getElementById("submit");
var resultYnN = document.getElementById("question-text")
var resultCount = document.getElementById("result")

//Adding my Functions
function prepareQuiz() {
    //My Nice Timer
    var timer = 10;
    var prepareInterval = setInterval(function () {
        timer--;
        countdownElement.textContent = timer + " seconds until we start.";
        if(timer === 0) {
            clearInterval(prepareInterval);
            countdownElement.textElement = "";
            prepareQuiz();
        }
    }, 1000);
}