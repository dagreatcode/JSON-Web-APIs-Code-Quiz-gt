//Adding my Variables
var countdownElement = document.querySelector(".countdown");
// var currentQuestion = 0;
// var score = 0;
var timer = 99;
// var finished = "";
// var form = document.getElementById("form");
// var questionElement = document.getElementById("allQuestions");
// var questionText = document.getElementById("text");
// var buttonOne = document.querySelector("buttonOne");
// var buttonTwo = document.querySelector("buttonTwo");
// var buttonThree = document.querySelector("buttonThree");
// var buttonFour = document.querySelector("buttonFour");
// var buttonFive = document.querySelector("buttonFive");
// var nextButton = document.getElementById("submit");
// var resultYnN = document.getElementById("question-text");
// var resultCount = document.getElementById("result");
// var question = [
//     "Question1 A,B,C, or D",
//     "Question2 A,B,C, or D", 
//     "Question3 A,B,C, or D",
//     "Question4 A,B,C, or D", 
//     "Question5 A,B,C, or D", 
// ];

prepareQuiz();

// function nextQuestion (allQuestionsIndex) {
//     var addd = question[allQuestionsIndex];
//     questionElement.textContent = (questionIndex + 1) + ', '+ addd.allQuestions;
//     buttonOne.textContent = addd.buttonOne;
//     buttonTwo.textContent = addd.buttonTwo;
//     buttonThree.textContent = addd.buttonThree;
//     buttonFour.textContent = addd.buttonFour;
//     buttonFive.textContent = addd.buttonFive;
// }

// //Adding my Functions
function prepareQuiz() {
    //My Nice Timer
    var timerInterval = setInterval(function () {
    timer--;
    countdownElement.textContent = timer + " seconds until we start.";
        if(timer === 0) {
            clearInterval(timerInterval);
            // prepareQuiz();
        }
    }, 1000);
};
    

function loadQuestion () {
   
    var selectedOption = document.querySelector(submit);
    if (question[currentQuestion].selectedOption === selectedOption){
        score += 1
        selectedOption.textContent = "Great";
        document.body.append();
        console.log()
    }
    selectedOption.checked = false;
   
    if (question[0] === true) {
        nextQuestion();
    }
    if (question[1] === true) {
        nextQuestion();
    }
    if (question[2] === true) {
        nextQuestion();
    }
    if (question[3] === true) {
        nextQuestion();
    }
    if (question[4] === true) {
        finished();
    }



};





console.log("hello");

//ButtonEvents 



buttonOne.addEventListener("click", function() {

});

buttonTwo.addEventListener("click", function() {
    
});

buttonThree.addEventListener("click", function() {
    
});

buttonFour.addEventListener("click", function() {
    
});


// //Test Runner
// function runTest() {
//     for (var i = 0; i < runTest.length; i++) {
//         var runTest = runTest[i];
//         if click === true;

//     }
// }