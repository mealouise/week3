const numSquares = 6;
const colors = ["rgb(255,0,0)", "rgb(255,0,255)", "rgb(255,225,0)", "rgb(255,0,255)", "rgb(0,255,255)", "rgb(0,255,0)"];
//const pickedColor;
const squares = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");



for(i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
}