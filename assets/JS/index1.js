//Adding Variables DOM
var countdownElement = document.querySelector(".countdown");
var buttonElement = document.getElementById("submit");
var questionsEl = document.getElementById("allQuestions")
// var imageContainerEl = document.getElementById("image-container")

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
            selectAndDisplayQuestion();
         
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

// Functions Javascript variables
var questions = [
    {
        question: "Question 1: A,B,C, or D",
        answer: "a",
        // image: "",
    },
    {
        question: "Question 2: A,B,C, or D", 
        answer: "b",
        // image: "",
    },
    {
        question: "Question 3: A,B,C, or D",
        answer: "c",
        // image: "",
    },
    {
        question: "Question 4: A,B,C, or D", 
        answer: "d",  
        // image: "",
    },
    {
        question: "Question 5: A,B,C, or D", 
        answer: "a",
        // image: "",
    },
    {
        question: "Question 6: A,B,C, or D", 
        answer: "b",
        // image: "",
    },
    {
        question: "Question 7: A,B,C, or D", 
        answer: "c",
        // image: "",
    },
    {
        question: "Question 8: A,B,C, or D", 
        answer: "d",
        // image: "",
    },
];

// function startQuiz() {
//     console.log(question);
// };

// Function Definitions
function selectAndDisplayQuestion(){
    console.log("RandomQuestionArray", questions);
    var randomIndex = Math.floor(Math.random() * questions.length);
    console.log("RandomIndex", randomIndex);
    console.log("Element", questions[randomIndex]);
    //     // Refresh image on every click
    //     imageContainerEl.innerHTML = "";
    //     // 1. Create an element
    //     var imageEl = document.createAttribute("img");
    //     // 2. add content
    //     imageEl.setAttribute("alt", questions[randomIndex].answer);
    //     imageEl.setAttribute("src", questions[randomIndex].image);
    //     imageEl.setAttribute("style", "height: 200px")
    // // 3. Append to existing element
    // imageContainerEl.appendChild(imageEl);
    questionsEl.textContent = questions[randomIndex].question + " - " + questions[randomIndex].answer;

};

// Function Call
selectAndDisplayQuestion();

// Event Listeners
buttonElement.addEventListener("click", function(){
    selectAndDisplayQuestion();
});