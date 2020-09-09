import React, { useState, FunctionComponent } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Board from "./components/Board";
// type SquereProps = {
//   onClick?: () => void;
//   value?: number;
// };

// const Square: FunctionComponent<SquereProps> = ({ value = 0, onClick }) => {
//   const [stateValue, setValue] = useState(value);

//   const showAlert = (index: number) => {
//     console.log(`alert you click ${index}`);
//     setValue(index + 1);
//   };

//   return (
//     <button className="square" onClick={() => showAlert(stateValue)}>
//       {stateValue}
//     </button>
//   );
// };

// function Board() {
//   const renderSquare = (i: number) => {
//     return <Square value={i.toString()} />;
//   };

//   const status: String = "Next player: X";

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   );
// }

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div></div>
        <ol></ol>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
