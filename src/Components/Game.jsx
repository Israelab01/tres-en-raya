import { useState } from "react";
import Board from "./Board";
import "./Game.css";

const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (squares[index] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every((square) => square !== null);

    const status = winner
        ? `Ganador: ${winner}`
        : isDraw
        ? "¡Empate!"
        : `Turno de: ${isXNext ? "X" : "O"}`;

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
    };

    return (
        <div className="game">
            <h1>{status}</h1>
            <Board squares={squares} onSquareClick={handleClick} />
            <button className="reset-button" onClick={resetGame}>
                Reiniciar Juego
            </button>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
};

export default Game;
