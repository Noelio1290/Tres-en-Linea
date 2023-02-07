import React, {useState} from "react"
import Square from "./square"

const Board = () => {
    let [squares, setSquare] = useState(Array(9).fill(null));
    let [xIsNext, setxIsNext] = useState(true);
    

    const handleClick = (i) => {
        const copySquare = [...squares];

        if (calculateWinner(copySquare) || copySquare[i]){
            return  
        }
        copySquare[i] = xIsNext ? 'X' : 'O';
        setSquare(copySquare)
        setxIsNext(!xIsNext)
    };

    const renderSquare = (i) => {
        return (
            <Square
                index={i}
                value={squares[i]} 
                clickHandler={handleClick}
            />
        )
    };

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    };
    
    const winner = calculateWinner(squares);
        let status;
        if(winner){
            status= 'winner: ' + winner;
        } else {
            status = 'Next player: ' + 
            (xIsNext ? 'X' : 'O');
        };

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
    
    )
};

export default Board
