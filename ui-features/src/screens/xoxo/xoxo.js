import { useEffect, useState } from "react";
import XoxoBoard from "../../components/XoxoBoard/XoxoBoard";

const Xoxo = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  useEffect(() => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }
  }, [board]);
  const getCurrentUser = () => {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (board[i]) count++;
    }
    return count % 2;
  };
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left
    [2, 4, 6], // Diagonal from top-right
  ];

  const handleSquareClick = (index) => {
    if (winner) return;
    const newBoard = board.map((val, id) => {
      if (index == id) return getCurrentUser() ? "O" : "X";
      return val;
    });
    setBoard(newBoard);
  };
  return (
    <>
      {winner ? (
        <p>{winner} Wins</p>
      ) : (
        <p>{getCurrentUser() ? "O" : "X"} Turn</p>
      )}
      <XoxoBoard board={board} handleSquareClick={handleSquareClick} />
      {winner && (
        <button
          className="xoxoRetryBtn"
          onClick={() => {
            setBoard(Array(9).fill(""));
            setWinner("");
          }}
        >
          Retry
        </button>
      )}
    </>
  );
};

export default Xoxo;
