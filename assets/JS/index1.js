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
    timer2--;
    countdownElement.textContent = timer + " seconds until we start.";
        if(timer === 0) {
            clearInterval(timerInterval);
            // startTimer();
            // startQuiz();
        }
    }, 1000);
};

function startTimer() {
    var timerInterval = setInterval(function () {
    timer--;
    countdownElement.textContent = timer + "";
        if(timer === 0) {
            clearInterval(timerInterval);
            // prepareQuiz();
        }
    }, 1000);
};

function startQuiz() {

};
    