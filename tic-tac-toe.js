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
