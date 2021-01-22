import React, { useState } from "react";
import Dice from "./Dice";
import RollDice from "./RollDice";
import Player from "./Player";

function Board() {
  const [players, setPlayers] = useState([
    { name: "Amidship", chips: 4 },
    { name: "Jared S", chips: 5 },
    { name: "Joe", chips: 3 },
    { name: "Rob", chips: 4 },
  ]);

  const [gameOver, setGameOver] = useState(false);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(2);
  const [dice, setDice] = useState(["A", "•", "•", "•", "•", "•"]);

  const currentPlayer = players[currentPlayerIndex].name;
  const totalChips = players.reduce((acc, player) => acc + player.chips, 0);

  return (
    <>
      <h1>Port, Amidship, Starboard! {totalChips}</h1>
      <h2>Current Player: {currentPlayer}</h2>
      {gameOver && <h3>Game over! {currentPlayer} wins!</h3>}

      <Dice dice={dice} />
      {!gameOver && (
        <RollDice
          dice={dice}
          setDice={setDice}
          players={players}
          setPlayers={setPlayers}
          currentPlayerIndex={currentPlayerIndex}
          setCurrentPlayerIndex={setCurrentPlayerIndex}
          setGameOver={setGameOver}
        />
      )}

      {players.map(({ name, chips }, i) => (
        <Player name={name} c={chips} key={i} />
      ))}
    </>
  );
}

export default Board;
