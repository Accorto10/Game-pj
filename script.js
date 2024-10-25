let board = ["", "", "", "", "", "", "", "", ""];
let currentval = "O";
let gameover = false;
let player1 = 0;
let player2 = 0;

function press(cell, index) {
    if (board[index] === "" && !gameover) {
        board[index] = currentval;
        cell.textContent = currentval;

        if (currentval === "O") {
            currentval = "X";
        } else {
            currentval = "O";
        }
        checkwin();
    }
}

function checkwin() {
    const wincondt = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (const wincombo of wincondt) {
        const [a, b, c] = wincombo;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            gameover = true;
            if (board[a] === "O") {
                alert("Player 1 won the match");
                player1++;
            } else {
                alert("Player 2 won the match");
                player2++;
            }
            document.getElementById("p1").innerHTML = player1;
            document.getElementById("p2").innerHTML = player2;
        }
    }
}

function reset() {
    gameover = false;
    board = ["", "", "", "", "", "", "", "", ""];  // Reset the board array
    currentval = "O";  // Reset the starting player if needed

    const buttons = document.querySelectorAll("button");
    for (let index = 0; index <= 8; index++) {
        buttons[index].innerHTML = "";  // to reset the button text
    }
}
function newGame() {
    location.reload();  // to refresh the entire page
}

