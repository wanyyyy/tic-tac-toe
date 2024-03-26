"use client";

import { useState } from "react";
import Image from "next/image";
import resetIcons from "../../../../public/icons/reset.png";

import Square from "../../components/square/square";
import Header from "@/app/components/header/header";
import styles from "./board.module.css";

export default function Board() {
  const [squareArray, setSquareArray] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [homeWinner, setHomeWinnder] = useState(0);
  const [awayWinner, setAwayWinnder] = useState(0);

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
        data[0] === "⚫️"
          ? setHomeWinnder(homeWinner + 1)
          : setAwayWinnder(awayWinner + 1);
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
    setIsNext(true);
    setWinnerText("");
  };

  return (
    <div>
      <Header>Tic-Tac-Toe</Header>
      <div className={styles.reset}>
        <button onClick={handleReset}>다시하기</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          height: "70px",
        }}
      >
        <div
          style={{
            gridColumn: "2/3",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          ⚫️ {homeWinner} : {awayWinner} ⚪️
        </div>
        <button
          style={{
            backgroundColor: "#fff",
            border: "0",
            borderRadius: "8px",
            height: "30px",
            width: "30px",
            cursor: "pointer",
          }}
          onClick={() => (setHomeWinnder(0), setAwayWinnder(0))}
        >
          <Image src={resetIcons} alt="점수리셋" width={20} height={20} />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      </div>
      <div className={styles.result}>
        {!winner && squareArray.indexOf(null) === -1
          ? "비김!"
          : winnerText
          ? `${winnerText} 승리!`
          : null}
      </div>
    </div>
  );
}
