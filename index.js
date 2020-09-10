//Adding my Variables
var countdownElement = document.getElementById("countdown");
var currentQuestion = 0;
var score = 0;
var timer = 10;
var form = document.getElementById("form");
var questionElement = document.getElementById("allQuestions");
var questionText = document.getElementById("text");
var buttonOne = document.getElementById("buttonOne");
var buttonTwo = document.getElementById("buttonTwo");
var buttonThree = document.getElementById("buttonThree");
var buttonFour = document.getElementById("buttonFour");
var nextButton = document.getElementById("submit");
var resultYnN = document.getElementById("question-text");
var resultCount = document.getElementById("result");
var question = [
    "Question1",
    "Question2", 
    "Question3",
    "Question4", 
    "Question5", 
    "Question6", 
];

function nextQuestion (allQuestionsIndex) {
    var addd = question[allQuestionsIndex];
    questionElement.textContent = (questionIndex + 1) + ', '+ addd.allQuestions;
    buttonOne.textContent = addd.buttonOne;
    buttonTwo.textContent = addd.buttonTwo;
    buttonThree.textContent = addd.buttonThree;
    buttonFour.textContent = addd.buttonFour;
}


// //Adding my Functions
function prepareQuiz() {
//My Nice Timer
    var timer = 10;
    var prepareInterval = setInterval(function () {
       timer--;
       countdownElement.textContent = timer + " seconds until we start.";
       if(timer === 0) {
           clearInterval(prepareInterval);
           countdownElement.textElement = 0;
           prepareQuiz();
        }
    }, 1000);
}

console.log("hello");

//ButtonEvents 

}

buttonOne.addEventListener("click", function() {

})

buttonOne.addEventListener("click", function() {
    
})

buttonOne.addEventListener("click", function() {
    
})

buttonOne.addEventListener("click", function() {
    
})


//Test Runner
function runTest() {
    for (var i = 0; i < runTest.length; i++) {
        var runTest = runTest[i];
        if click === true;

    }