//Adding Variables to reference DOM elements.
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// Sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

// Question start / Timer
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// My Functions 
// function startTimer() {
//     var timeInterval = setInterval(function () {
//     console.log("Timer");
//     time--;
//     countdownElement.textContent = time + " seconds until finished";
//         if(time === 0) {
//             clearInterval(timeInterval);
//             startQuiz();
//         }
//     }, 1000);
// };


function startQuiz() {
    console.log("Start");
    // Hiding the start screen so that the questions can appear in place. 
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // This is where I un-hide the questions section because its set to hide
    questionsEl.removeAttribute("class");

    // start timer with ,1000) milli seconds
    timerId = setInterval(clockTick, 1000);

    // show starting time
    timerEl.textContent = time;
    getQuestion();
};


function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choicePick = document.createElement("button");
    choicePick.setAttribute("class", "choice");
    choicePick.setAttribute("value", choice);

    choicePick.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice. The other way is to on("click",
        // This way is better ;)
    choicePick.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choicePick);
  });
    
};

function questionClick() {
 // check if user guessed wrong
 if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
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
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
};

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
};

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;
  
    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  }
};

function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saveHighscore();
    }
  }

// function selectAndDisplayQuestion(){
//     console.log("RandomQuestionArray", questions);
//     var randomIndex = Math.floor(Math.random() * questions.length);
//     console.log("RandomIndex", randomIndex);
//     console.log("Element", questions[randomIndex]);
//     questionsEl.textContent = questions[randomIndex].question + " - " + questions[randomIndex].answer;
// };

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
