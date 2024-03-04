import Header from "./_components/header/page";
import Board from "./board/page";

export default function Home() {
  return (
    <>
      <Header>Tic-Tac-Toe</Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Board />
      </div>
    </>
  );
}
