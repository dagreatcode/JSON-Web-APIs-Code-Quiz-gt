var question =
    "Question1 Question2 Question3, Question4, Question5, Question6 ";   


var countdownElement = document.getElementById("countdown");
var textElement = document.getElementById("text");
var nextButton = document.getElementById("button")

nextButton.addEventListener("click", function () {
    question++;
    textElement.textContent = question;
})
//More buttons i will use later
// backButton.addEventListener("click", function () {
//     if(question > 0){
//         question--;
//         textElement.textContent = question;
//      }
// })


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
}

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

prepareQuiz();