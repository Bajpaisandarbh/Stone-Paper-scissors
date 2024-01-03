var you;
var yourscore=0;
var opponent;
var opponentscore=0;
var choices = ['stone','paper','scissor'];

window.onload = function() {
    for(let i=0;i<3;i++){
        //<img id="stone" src='stone.png>
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click",selectchoice);
        document.getElementById("choices").append(choice);
    }
}

function selectchoice() {
    you = this.id;
    document.getElementById('your-choice').src = you + ".png";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById('opponent-choice').src = opponent + ".png";

    // check for winner
    if (you == opponent){
        yourscore += 1;
        opponentscore += 1;
    }
    else{
        if (you == "stone") {
        if(opponent == "scissor") {
            yourscore += 1;
        }
        else if(opponent == "paper") {
            opponentscore += 1;
        }
    }
    else if (you == "paper") {
        if(opponent == "stone") {
            yourscore += 1;
        }
        else if(opponent == "scissor") {
            opponentscore += 1;
        }
    }
    else if (you == "scissor") {
        if(opponent == "paper") {
            yourscore += 1;
        }
        else if(opponent == "stone") {
            opponentscore += 1;
        }
    }
} 

document.getElementById("your-score").innerText = yourscore;
document.getElementById("opponent-score").innerText = opponentscore;
}