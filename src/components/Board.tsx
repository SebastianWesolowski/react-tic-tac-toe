import React, { useState } from "react";
import Square from "./Square";
const Board = () => {
  const renderSquare = (i: number) => {
    return <Square value={stateArrayBoard[i]} />;
  };

  const [stateArrayBoard, setArrayBoard] = useState(Array(9).fill(null));

  const status: String = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
