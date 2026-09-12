// Get player input elements
let player1 = document.getElementById("player-1");
let player2 = document.getElementById("player-2");
let submit = document.getElementById("submit");

// Get game elements
let playerContainer = document.querySelector(".player-container");
let message = document.querySelector(".message");
let board = document.querySelector(".board");

// Get all 9 boxes
let boxes = document.querySelectorAll(".box");

// Winning combinations
let winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// Player 1 starts
let currentPlayer = 1;

// Track whether game has ended
let gameOver = false;


// Initially hide the game
message.style.display = "none";
board.style.display = "none";


// Start Game button
submit.addEventListener("click", function() {

    // Get player names
    let player1Name = player1.value;
    let player2Name = player2.value;

    // Hide player form
    playerContainer.style.display = "none";

    // Show game
    message.style.display = "block";
    board.style.display = "grid";

    // Show Player 1's turn
    message.textContent = player1Name + ", you're up";
});


// Handle box clicks
boxes.forEach(function(box) {

    box.addEventListener("click", function() {

        // Don't allow clicks after game ends
        if (gameOver) {
            return;
        }

        // Don't allow an already filled box
        if (box.textContent !== "") {
            return;
        }


        // Put X or O
        if (currentPlayer === 1) {
            box.textContent = "X";
        } else {
            box.textContent = "O";
        }


        // Check every winning combination
        winningCombinations.forEach(function(combination) {

            let box1 = document.getElementById(combination[0]);
            let box2 = document.getElementById(combination[1]);
            let box3 = document.getElementById(combination[2]);


            // Check if all three boxes have the same symbol
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

                // Stop the game
                gameOver = true;
            }
        });


        // Don't switch player if someone already won
        if (gameOver) {
            return;
        }


        // Switch player
        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }


        // Show next player's turn
        if (currentPlayer === 1) {
            message.textContent = player1.value + ", you're up";
        } else {
            message.textContent = player2.value + ", you're up";
        }

    });

});