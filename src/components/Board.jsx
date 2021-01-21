import React, { useState } from "react";
import Dice from "./Dice";
import Player from "./Player";

function Board() {
  const [players, setPlayers] = useState([
    { name: "Amidship", chips: 4 },
    { name: "Jared S", chips: 5 },
    { name: "Joe", chips: 3 },
    { name: "Rob", chips: 4 },
  ]);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(2);
  const [dice, setDice] = useState(["A", "•", "•", "•", "•", "•"]);

  const currentPlayer = players[currentPlayerIndex].name;

  return (
    <>
      <h1>Port, Amidship, Starboard!</h1>
      <h2>Current Player: {currentPlayer}</h2>

      <Dice
        dice={dice}
        setDice={setDice}
        players={players}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
      />

      {players.map(({ name, chips }, i) => (
        <Player name={name} c={chips} key={i} />
      ))}
    </>
  );
}

export default Board;
