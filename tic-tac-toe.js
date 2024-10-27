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
    const squares = document.querySelectorAll("#board div"); // Select all square elements
    const statusDiv = document.getElementById("status"); // Select status display
    const restartButton = document.querySelector(".btn"); // Select restart button
    let currentPlayer = "X"; // Start with player X
    const gameStatus = Array(9).fill(null); // Track game state

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

    // Function to restart the game
    function restartGame() {
        gameStatus.fill(null); // Reset game status
        currentPlayer = "X"; // Reset current player
        statusDiv.innerHTML = `Move your mouse over a square and click to play an X or an O.`; // Reset status message

        squares.forEach(square => {
            square.textContent = ""; // Clear the square text
            square.classList.remove("X", "O", "hover"); // Remove classes
            square.style.pointerEvents = 'auto'; // Enable square clicks
        });
    }

    // Event listeners for squares
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
                square.textContent = currentPlayer; // Set the square's text to the current player (X or O)
                square.classList.add(currentPlayer); // Add class for styling
                gameStatus[index] = currentPlayer; // Update game state

                const winner = checkWinner(); // Check for a winner
                if (winner) {
                    statusDiv.innerHTML = `Congratulations! ${winner} is the Winner!`; // Update status message
                    squares.forEach(s => s.style.pointerEvents = 'none'); // Disable further moves
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle player
                    statusDiv.innerHTML = `Current Player: ${currentPlayer}`; // Update current player message
                }
            }
        });
    });

    // Attach event listener to the restart button
    restartButton.addEventListener("click", restartGame);
});
