import React, { useState } from "react";
import Dice from "./Dice";
import Player from "./Player";

function Board() {
  const [players, setPlayers] = useState({
    "Jared S": 5,
    Joe: 3,
    Rob: 4,
    Amidship: 4,
  });

  const [dice, setDice] = useState(["A", "P", "S", "A", "P", "S"]);

  return (
    <>
      <h1>Port, Amidship, Starboard!</h1>

      <Dice dice={dice} setDice={setDice} />

      {Object.entries(players).map(([name, chips], i) => (
        <Player name={name} c={chips} key={i} />
      ))}
    </>
  );
}

export default Board;
