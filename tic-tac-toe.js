document.addEventListener("DOMContentLoaded", () => {
    // Select all div elements inside the game board with class `square`
    const squares = document.querySelectorAll("#board div");

    // Loop over each square and set the class attribute to `square`
    squares.forEach(square => {
        square.setAttribute("class", "square");
    });
});
