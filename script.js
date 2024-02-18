let boxes = document.querySelectorAll(".box");
let turn0 = true;
let boxtext = document.querySelectorAll(".boxtext");
let chance = document.querySelector(".chance");
let img = document.querySelector("#imgnew");
let audio = document.querySelector("#gameover");
let chanceaudio = document.querySelector("#chanceaudio");
let winner = document.querySelector(".winner");
let winningchance = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let resetbutton = document.querySelector(".reset");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            chanceaudio.play();
            box.innerHTML = "0"
            turn0 = false;
            chance.innerHTML = "turn of X"


        }
        else {
            turn0 = true;
            box.innerHTML = "X"
            chanceaudio.play();
            chance.innerHTML = "turn of 0"
            box.disabled = true;

        }
        checkwinnners();
        resetbutton.addEventListener("click", () => {
            box.innerHTML = "";
            winner.style.display = "none";
            img.style.display = "none";

        });



    })
})
const checkwinnners = () => {
    for (let pattern of winningchance) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val != pos2val && pos2val != pos3val) {
                winner.innerHTML = "the game is draw";

            }
            else if (pos1val === pos2val && pos2val === pos3val) {
                img.style.display = "block";
                audio.play();
                winner.style.visibility = "none";
                winner.innerHTML = ` 🏆winner is ${pos1val}`;
                return true;

            }
        }
        else {
            img.style.display = "none";
            audio.pause();
            winner.innerHTML = "";

        }
    }

}
