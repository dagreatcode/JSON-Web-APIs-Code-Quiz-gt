var question =
    "Question1 Question2 Question3, Question4, Question5, Question6 ";   


var countdownElement = document.getElementById("countdown");
var textElement = document.getElementById("text");

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
console.log(prepareQuiz);


function submit() {
    var submitB = document.getElementById("submit");{
    submitB.addEventListener("click", function (event) {
        if (question++)
            textElement.textContent = question;
            console.log("OUCH!!!!!!!!");
        }
    }  
}

.addEventListener("click", )
