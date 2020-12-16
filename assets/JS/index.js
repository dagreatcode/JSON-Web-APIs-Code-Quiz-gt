// Counter variables go here to keep track of the time and question index.
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Element variables go here to reference DOM elements better.
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects path made into Audio variables to call containing the correct and incorrect sounds of audio files to be associated with the two new audio elements.
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// FUNCTION TO START
function startQuiz() {
  // We are hiding the start screen by setting the attr to hide to bring in the questions.
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // We are un-hiding the questions section.
  questionsEl.removeAttribute("class");

  // Starting the timer.
  timerId = setInterval(clockTick, 1000);

  // Show the time to text.
  timerEl.textContent = time;

  // Call in the questions in place of our clean DOM.
  getQuestion();
}

// FUNCTION TO START QUESTIONS
function getQuestion() {
  // Get the first indexed question. (currentQuestionIndex is equal to index 0).
  var currentQuestion = questions[currentQuestionIndex];

  // Manipulate the DOM adding the questions to the title element.
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // One of my FAV. This clears out any html in the area you target.
  choicesEl.innerHTML = "";

  // loop over choices with a forEach button lol.
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // Add to the DOM
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // Conditional statements to check right or wrong clicks.
  if (this.value !== questions[currentQuestionIndex].answer) {
    // Wrong -15
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // Add time to the DOM
    timerEl.textContent = time;

    // play "wrong" sound effect
    sfxWrong.play();

    feedbackEl.textContent = "Wrong!";
  } else {
    // play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent = "Correct!";
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // increment up to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen by un-hiding the attr.
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // Display final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // You have to get saved scores from local-storage first, or if not any, set to empty array before you can set in L.S. in a function.
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // L.S. only takes in string. So we use JSON parse to pull and stringify to put/set.
    // Format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // Redirect to next page with DOM manipulation and href, cool huh?..
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// User clicks button to submit initials
submitBtn.onclick = saveHighscore;

// User clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
