//Adding my Variables
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

function loadQuestion