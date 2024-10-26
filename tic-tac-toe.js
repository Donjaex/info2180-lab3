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
    const gameState = Array(9).fill(null); // Track the game state

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
            if (!gameState[index]) {
                // Set the square's text to the current player (X or O)
                square.textContent = currentPlayer;
                
                // Add the appropriate class for styling
                square.classList.add(currentPlayer);

                // Update game state
                gameState[index] = currentPlayer;

                // Toggle player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});
