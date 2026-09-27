const star = document.getElementById("star");
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let time = 30;

star.addEventListener("click", function() {

    score++;

    scoreDisplay.textContent = "Score: " + score;

    let x = Math.random() * 900;
    let y = Math.random() * 250;

    star.style.left = x + "px";
    star.style.top = y + "px";
});

setInterval(function() {

    time--;

    timerDisplay.textContent = "Time: " + time;

}, 1000);