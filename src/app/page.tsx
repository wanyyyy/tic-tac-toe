import Header from "./components/header/header";
import Board from "./layout/board/tic-tac-toe";

export default function Home() {
  return (
    <>
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
