//Five Question Quiz

//Variables
var questions = [
    "What is a for Loop?",
    "What is a var use for",
    "Question 3 is coming soon",
    "Question 4 is comimg soon",
    "Question 5 is coming soon",
];
var countdownElement = document.getElementById("countdown");
var textElement = document.getElementById("text");
var score = 0;
var currentQuestion = 0;

var todoInput = document.querySelector("#answers");
var todoForm = document.querySelector("#form");
var countdownTime = document.querySelector("#countdown");
//First Thing is create a function

//Functions
function prepareQuiz() {
    //My Nice Timer
    var timer = 10;
    var  prepareInterval = setInterval(function () {
        timer--;
        countdownElement.textContent = timer + " seconds until we start.";
        if(timer === 0) {
            clearInterval(prepareInterval);
            countdownElement.textContent = "";
            thisIsAQuiz();
        }
    }, 1000);
}console.log(prepareQuiz);

function thisIsAQuiz() {
    //Print Questions One At A Time
    var currentQuestionIndex = 0;
    var questionArray = question.split(" ");
    var startQuizInterval = setInterval(function() {
        textElement.textContent = questionArray[currentQuestionIndex];
        currentQuestionIndex++;
        if (currentQuestionIndex === questionArray.length) {
            clearInterval(startQuizInterval);
        }
    },2000);
}
    
//.addEventListener("click", )