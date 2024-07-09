function makeBubble(){
    var clutter = "";

for (var i = 1; i<=161; i ++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.getElementById("panel-bottom").innerHTML = clutter;
}

var score = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

var timer = 60;
 function runTimer () {
    var timerint =  setInterval(() => {
        if(timer>0) {

            timer--;
            document.getElementById("timerval").textContent = timer;
        }
        else {

            clearInterval(timerint);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

var hitrn = 0;

function getNewHit (){
 hitrn = Math.floor(Math.random() * 10);
    // alert("hey")
    document.querySelector("#hitval").textContent = hitrn;
}

document.getElementById("panel-bottom")
.addEventListener("click", function(dts){
    var clickedNum = Number(dts.target.textContent);

    if (clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
// increaseScore();