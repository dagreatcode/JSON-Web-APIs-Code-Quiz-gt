var countdownElement = document.getElementById("countdown");
var textElementById("text");

function prepareQuiz() {
    var timer 10;
    var  prepareInterval = setInterval(function () {
        timer--;
        countdownElement.textContent = timer + " seconds until we start.";
        if(timer === 0) {
            clearInterval(prepareInterval);
            countdownElement.textContent = "";
            
        }
    })
}

console.log()