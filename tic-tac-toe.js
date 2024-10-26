document.addEventListener("DOMContentLoaded", () => {
    
    const squares = document.querySelectorAll("#board div");

    
    squares.forEach(square => {
        square.setAttribute("class", "square");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    let Player = "X";
    const game_status = Array(9).fill(null); 

    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            
            if (!game_status[index]) {
                
                square.textContent = Player;
                
               
                square.classList.add(Player);

                
                game_status[index] = Player;

                
                Player = Player === "X" ? "O" : "X";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    let currentPlayer = "X";
    const game_status = Array(9).fill(null); // Track the game state

    squares.forEach((square, index) => {
        // Event listener for mouse over
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });

        // Event listener for mouse out
        square.addEventListener("mouseleaves", () => {
            square.classList.remove("hover");
        });

        // Event listener for click
        square.addEventListener("click", () => {
            // Ensure the square is empty before proceeding
            if (!game_status[index]) {
                // Set the square's text to the current player (X or O)
                square.textContent = Player;
                
                // Add the appropriate class for styling
                square.classList.add(Player);

                // Update game state
                game_status[index] = Player;

                // Toggle player
                Player = Player === "X" ? "O" : "X";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board .square");
    const statusDiv = document.getElementById("status");
    let currentPlayer = "X"; // Start with player X
    const gameStatus = Array(9).fill(null); // Track the game state

    // Winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Function to check for a winner
    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
                return gameStatus[a]; // Return the winner (X or O)
            }
        }
        return null; // No winner yet
    }

    squares.forEach((square, index) => {
        // Event listener for mouse over
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });

        // Event listener for mouse out
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });

        // Event listener for click
        square.addEventListener("click", () => {
            // Ensure the square is empty before proceeding
            if (!gameStatus[index]) {
                // Set the square's text to the current player (X or O)
                square.textContent = currentPlayer;
                // Add the appropriate class for styling
                square.classList.add(currentPlayer);
                
                // Update game state
                gameStatus[index] = currentPlayer;

                // Check for a winner
                const winner = checkWinner();
                if (winner) {
                    // Update the status message
                    statusDiv.innerHTML = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                    // Disable further moves
                    squares.forEach(s => s.style.pointerEvents = 'none');
                } else {
                    // Toggle player
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    statusDiv.innerHTML = `Current Player: ${currentPlayer}`; // Update the current player message
                }
            }
        });
    });
});
