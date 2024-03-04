"use client";

import { useState } from "react";
import Square from "../_components/square/page";
import styles from "./board.module.css";

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
      <div className={styles.reset}>
        <button onClick={handleReset}>리겜</button>
      </div>
      <div className={styles.board}>
        <Square
          children={squareArray[0]}
          onClick={() => handleClick(0)}
          disabled={squareArray[0] ? true : false}
        />
        <Square
          children={squareArray[1]}
          onClick={() => handleClick(1)}
          disabled={squareArray[1] ? true : false}
        />
        <Square
          children={squareArray[2]}
          onClick={() => handleClick(2)}
          disabled={squareArray[2] ? true : false}
        />
        <Square
          children={squareArray[3]}
          onClick={() => handleClick(3)}
          disabled={squareArray[3] ? true : false}
        />
        <Square
          children={squareArray[4]}
          onClick={() => handleClick(4)}
          disabled={squareArray[4] ? true : false}
        />
        <Square
          children={squareArray[5]}
          onClick={() => handleClick(5)}
          disabled={squareArray[5] ? true : false}
        />
        <Square
          children={squareArray[6]}
          onClick={() => handleClick(6)}
          disabled={squareArray[6] ? true : false}
        />
        <Square
          children={squareArray[7]}
          onClick={() => handleClick(7)}
          disabled={squareArray[7] ? true : false}
        />
        <Square
          children={squareArray[8]}
          onClick={() => handleClick(8)}
          disabled={squareArray[8] ? true : false}
        />
      </div>
      {!winner && squareArray.indexOf(null) === -1 ? (
        <div className={styles.result}>비김!</div>
      ) : winnerText ? (
        <div className={styles.result}>{winnerText} 승리!</div>
      ) : null}
    </div>
  );
}
