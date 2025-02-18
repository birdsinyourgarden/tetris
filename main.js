const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const pauseBtn = document.getElementById("pauseButton");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");

const ROWS = 20, COLS = 10, SIZE = 30;
// let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

let board = [];
for (let i = 0; i < ROWS; i++) {
    board.push(new Array(COLS).fill(0));
}
let isPaused = false; 
let gameInterval;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0; 
highScoreElement.textContent = highScore;

const SHAPES = [
    [[1, 1, 1, 1]], // línea: estoy creando una matriz con una sola fila con cuatro columnas
    [[1,1], [1,1]], // cuadrado
    [[0,1,0], [1,1,1]], // T
    [[1, 1, 1, 1]], // 
    [[1, 1, 1, 1]], // 
]





