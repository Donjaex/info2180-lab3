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
    let Player = "X";
    const game_status = Array(9).fill(null); 

    squares.forEach((square, index) => {
        
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });

        
        square.addEventListener("mouseleaves", () => {
            square.classList.remove("hover");
        });

        
        square.addEventListener("click", () => {
            
            if (!game_status[index]) {
                
                square.textContent = Player;
                
                
                square.classList.add(Player);

               
                game_status[index] = Player;

                r
                Player = Player === "X" ? "O" : "X";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div"); 
    const statusDiv = document.getElementById("status"); 
    const restartButton = document.querySelector(".btn"); 
    let currentPlayer = "X"; 
    const gameStatus = Array(9).fill(null); 

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
                return gameStatus[a]; 
            }
        }
        return null; 
    }

    
    function restartGame() {
        gameStatus.fill(null); 
        currentPlayer = "X"; 
        statusDiv.innerHTML = 

        squares.forEach(square => {
            square.textContent = ""; 
            square.classList.remove("X", "O", "hover"); 
            square.style.pointerEvents = 'auto'; // 
        });
    }

    // Event listeners for squares
    squares.forEach((square, index) => {
        // Event listener for mouse over
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });

       
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });

       
        square.addEventListener("click", () => {
         
            if (!gameStatus[index]) {
                square.textContent = currentPlayer; 
                square.classList.add(currentPlayer); 
                gameStatus[index] = currentPlayer; 

                const winner = checkWinner(); 
                if (winner) {
                    statusDiv.innerHTML = `Congratulations! ${winner} is the Winner!`; 
                    squares.forEach(s => s.style.pointerEvents = 'none'); 
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X"; 
                    statusDiv.innerHTML = `Current Player: ${currentPlayer}`; 
                }
            }
        });
    });

    
    restartButton.addEventListener("click", restartGame);
});
