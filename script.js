let playerTurn = "X";

function gameChecker() {
    const buttons = document.querySelectorAll("button");
    let winner = null;

    // for checking of columns
    for (let i = 0; i < 3; i += 1) {
        if (buttons[i].innerHTML === "X" && buttons[i + 3].innerHTML === "X" && buttons[i + 6].innerHTML === "X") {
            winner = "X";
            window.alert(`Player ${winner} wins!`);
        } else if (buttons[i].innerHTML === "O" && buttons[i + 3].innerHTML === "O" && buttons[i + 6].innerHTML === "O") {
             winner = "O";
             window.alert(`Player ${winner} wins!`);
        }
    }

    // check the rows
    for (let i = 0; i <= 6; i += 3) {
        if (buttons[i].innerHTML === "X" && buttons[i + 1].innerHTML === "X" && buttons[i + 2].innerHTML === "X") {
            winner = "X";
            window.alert(`Player ${winner} wins!`);
        } else if (buttons[i].innerHTML === "O" && buttons[i + 1].innerHTML === "O" && buttons[i + 2].innerHTML === "O") {
            winner = "O";
            window.alert(`Player ${winner} wins!`);
        }    
    }
    // 0 1 2
    // 3 4 5
    // 6 7 8

    // check diagonals
    if (buttons[0].innerHTML === "X" && buttons[4].innerHTML === "X" && buttons[8].innerHTML === "X") {
        winner = "X";
        window.alert(`Player ${winner} wins!`);
    } else if (buttons[0].innerHTML === "O" && buttons[4].innerHTML === "O" && buttons[8].innerHTML === "O") {
        winner = "O";
        window.alert(`Player ${winner} wins!`);
    } 

    if (buttons[6].innerHTML === "X" && buttons[4].innerHTML === "X" && buttons[2].innerHTML === "X") {
        winner = "X";
        window.alert(`Player ${winner} wins!`);
    } else if (buttons[6].innerHTML === "O" && buttons[4].innerHTML === "O" && buttons[2].innerHTML === "O") {
        winner = "O";
        window.alert(`Player ${winner} wins!`);
    } 

    if (winner !== null) {
        const reset = document.createElement("button");
        reset.style.color = "red";
        reset.innerHTML = "RESTART GAME";

        reset.addEventListener("click", function() {
            location.reload();
        });

        document.querySelector("body").appendChild(reset);
    }


}

function onClickHandler() {
    if (this.innerHTML === "") {
        this.innerHTML = playerTurn;
        
        playerTurn = playerTurn === "X" ? "O" : "X";
        this.setAttribute("disabled", true);
        
        gameChecker();
        const message = document.querySelector("#message");
        message.innerHTML = `It's player ${playerTurn}'s turn`;
    }
}

function generateTable() {
    const table = document.createElement("div");
    table.setAttribute("class", "table");

    // inset 3 x 3
    for (let i = 1; i <= 3; i += 1) { // rows
        for (let j = 1; j <= 3; j += 1) { // cols
            const button = document.createElement("button");
            button.style = `grid-row: ${i}; grid-col: ${j}; background-color: white`;
            button.addEventListener("click", onClickHandler);
            table.appendChild(button);
        }
    }

    const container = document.querySelector(".container");
    container.appendChild(table);

    const message = document.querySelector("#message");
    message.innerHTML = `It's player ${playerTurn}'s turn`;
}

function startGame() {
    document.querySelector(".start-button").remove();
    generateTable();
}