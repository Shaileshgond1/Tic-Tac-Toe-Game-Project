let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");
let cong = document.querySelector(".cong");
let newgame = document.querySelector("#newgame");
let trunO = true; // player X player O


let win = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];
let i = 0;
let wi = false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO) {
            box.innerText = "X";
            trunO = false;
        }
        else {
            box.innerText = "O";
            trunO = true;
        }
        box.disabled = true;



        let winnerp = checkwinner();
        if (winnerp) {
            for (let b of boxes) {
                if (b.innerText == "") {
                    b.disabled = true;
                }
            }
            hidecontainer();
            cong.classList.remove("hide");

        }


    })
});

reset.addEventListener("click", () => {




    for (let b of boxes) {
        b.innerText = "";
        b.disabled = false;
    }

    msg.innerText = "";

})

newgame.addEventListener("click", () => {
    container.classList.remove("containerhide");
    cong.classList.add("hide");
    for (let b of boxes) {
        b.innerText = "";
        b.disabled = false;
    }

})
const checkwinner = () => {
    for (let pattern of win) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;
        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val == pos1val && pos1val == pos2val && pos0val == pos2val) {
                //  console.log("winner is " + pos0val);
                msg.innerText = "Congratulations winner is " + pos0val + "!!";
                return true;

            }
        }

    }
}

const hidecontainer = () => {
    container.classList.add("containerhide");
}

