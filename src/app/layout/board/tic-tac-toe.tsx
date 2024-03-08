"use client";

import { useState } from "react";
import Square from "../../components/square/square";
import styles from "./board.module.css";
import Header from "@/app/components/header/header";

export default function Board() {
  const [squareArray, setSquareArray] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(false);
  const [winnerText, setWinnerText] = useState("");

  const handleWinner = (squareArray: (string | null)[]) => {
    const winnerCase = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    winnerCase.map((i) => {
      const data = i.map((index) => squareArray[index]);
      if (
        data[0] === data[1] &&
        data[0] === data[2] &&
        data.indexOf(null) === -1
      ) {
        data[0] !== null ? setWinnerText(data[0]) : null;
        setWinner(true);
      }
    });
  };

  const handleClick = (i: number) => {
    const squares = squareArray.slice();
    if (winner) {
      return;
    }

    squares[i] = isNext ? "⚫️" : "⚪️";
    setSquareArray(squares);
    setIsNext(!isNext);
    handleWinner(squares);
  };

  const handleReset = () => {
    setSquareArray(Array(9).fill(null));
    setWinner(false);
    setWinnerText("");
  };

  return (
    <div>
      <Header>Tic-Tac-Toe</Header>
      <div className={styles.reset}>
        <button onClick={handleReset}>리겜</button>
      </div>
      <div className={styles.board}>
        {squareArray.map((_, squareNumber: number) => {
          return (
            <Square
              onClick={() => handleClick(squareNumber)}
              disabled={squareArray[squareNumber]}
              key={squareNumber}
            >
              {squareArray[squareNumber]}
            </Square>
          );
        })}
      </div>
      {!winner && squareArray.indexOf(null) === -1 ? (
        <div className={styles.result}>비김!</div>
      ) : winnerText ? (
        <div className={styles.result}>{winnerText} 승리!</div>
      ) : null}
    </div>
  );
}
