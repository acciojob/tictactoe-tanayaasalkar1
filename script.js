// Get player inputs
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");

let submit = document.getElementById("submit");


// Get game elements
let playerContainer = document.querySelector(".player-container");
let message = document.getElementById("message");
let board = document.querySelector(".board");

let boxes = document.querySelectorAll(".box");


// Winning combinations
let winningCombinations = [
    [1, 2, 3], // Row 1
    [4, 5, 6], // Row 2
    [7, 8, 9], // Row 3

    [1, 4, 7], // Column 1
    [2, 5, 8], // Column 2
    [3, 6, 9], // Column 3

    [1, 5, 9], // Diagonal
    [3, 5, 7]  // Diagonal
];


// Player 1 starts
let currentPlayer = 1;

// Game status
let gameOver = false;


// Hide game initially
message.style.display = "none";
board.style.display = "none";


// Start game
submit.addEventListener("click", function() {

    // Hide form
    playerContainer.style.display = "none";

    // Show message and board
    message.style.display = "block";
    board.style.display = "grid";

    // Show first player's turn
    message.textContent = player1.value + ", you're up";
});


// Handle box click
boxes.forEach(function(box) {

    box.addEventListener("click", function() {

        // Don't play after game ends
        if (gameOver) {
            return;
        }

        // Don't overwrite existing value
        if (box.textContent !== "") {
            return;
        }


        // Put X or O
        if (currentPlayer === 1) {
            box.textContent = "X";
        } else {
            box.textContent = "O";
        }


        // Check all winning combinations
        for (let i = 0; i < winningCombinations.length; i++) {

            let combination = winningCombinations[i];

            let box1 = document.getElementById(combination[0]);
            let box2 = document.getElementById(combination[1]);
            let box3 = document.getElementById(combination[2]);


            // Check if all 3 are same
            if (
                box1.textContent !== "" &&
                box1.textContent === box2.textContent &&
                box2.textContent === box3.textContent
            ) {

                // Player 1 wins
                if (currentPlayer === 1) {

                    message.textContent =
                        player1.value + " congratulations you won!";

                }

                // Player 2 wins
                else {

                    message.textContent =
                        player2.value + " congratulations you won!";

                }

                // Stop game
                gameOver = true;

                return;
            }
        }


        // Switch player
        if (currentPlayer === 1) {
            currentPlayer = 2;
            message.textContent = player2.value + ", you're up";
        } 
        else {
            currentPlayer = 1;
            message.textContent = player1.value + ", you're up";
        }

    });

});