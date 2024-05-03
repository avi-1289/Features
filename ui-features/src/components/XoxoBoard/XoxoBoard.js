const XoxoBoard = ({ board, handleSquareClick }) => {
  return (
    <div className="xoxoBoard">
      {board.map((square, index) => (
        <div
          key={index}
          className="xoxoBoardSquare"
          onClick={() => handleSquareClick(index)}
        >
          {square}
        </div>
      ))}
    </div>
  );
};

export default XoxoBoard;
