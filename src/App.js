import "./styles.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

export default function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none" });

  useEffect(() => {
    chkiftie();
    checkWin();
    if (player === "X") {
      return setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`game finished! winning player: ${result.winner}`);
      restart();
    }
  }, [result]);

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player });
      }
    });
  };
  const chkiftie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };
  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  return (
    <div className="App">
      <div className="board">
        <div className="Heading">
          <h1 className="head">Tic Tac Toe </h1>
        </div>
        <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}
