var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble(){
    var clutter = "";

for (var i=1; i<=176; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    var time = setInterval(function(){
        if(timer > 0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = `<img src="game-over.png" alt="Game Over" class="gameover">`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(e){
    var clickedNum = Number(e.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    }
});

runTimer();
makeBubble();
getNewHit();