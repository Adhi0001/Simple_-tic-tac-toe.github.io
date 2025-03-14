// import React from 'react'

// function MainConta() {
//   return (
//     <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
//           <h1 style={{display:"flex",justifyItems:"center",justifyContent:"center"}}>Tick-tack-toe</h1>
//              <div style={{width:"500px",height:"500px",border:"solid 2px black"}}>
//                  <div style={{ border: "solid 1px black", display: "flex", justifyContent: "center", alignItems: "center" }}></div>
//                  </div>
//                 <div>
//                </div>
//               <div>
//              </div>      
//             </div>
//   )
// }

// export default MainConta

import React, { useState } from 'react';
import './Main.css'

function calculateWinner(squares) {
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
}

const TicTacToe = () => {
    const initialState = Array.from({ length: 9 }, () => null); // Updated to initialState
    const [initial, setInitial] = useState(initialState);
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = () => {
        setInitial(initialState); // Reset the game state
        setIsXNext(true); // Set X to play first
    };

    const handleBoxClick = (i) => {
        if (calculateWinner(initial) || initial[i]) {
            return;
        }
        const newBox = initial.slice();
        newBox[i] = isXNext ? 'X' : 'O';
        setIsXNext(!isXNext);
        setInitial(newBox);
    };

    const winner = calculateWinner(initial);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1 style={{ textAlign: "center" }}>Tick-Tack-Toe</h1>
                <button className="new-button" onClick={handleClick}>
                    <span className="blink">Start New Game</span>
                </button>
                <div className="grid-container">
                    {initial.map((box, i) => {
                        return (
                            <div
                                key={i}
                                className={`box ${box}`} // Add box state as class
                                onClick={() => handleBoxClick(i)} // Updated function name
                            >
                                {box}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TicTacToe;

