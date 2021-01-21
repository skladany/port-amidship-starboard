import Die from "./Die";

function Dice({
  dice,
  setDice,
  players,
  setPlayers,
  currentPlayerIndex,
  setCurrentPlayerIndex,
}) {
  const rollDice = function () {
    const numOfDice = dice.length;

    const rolls = [...Array(numOfDice)].map((e, i) => {
      const roll = Math.floor(Math.random() * 6);

      switch (roll) {
        case 0:
          return "P";
          break;
        case 1:
          return "A";
          break;
        case 2:
          return "S";
          break;
        default:
          return "•";
      }
    });

    setDice(rolls);
    redistributeChips(rolls);
  };

  const redistributeChips = function (rolls) {
    const portPlayerIndex =
      currentPlayerIndex - 1 > 0 ? currentPlayerIndex - 1 : players.length - 1;
    const starboardPlayer =
      currentPlayerIndex + 1 < players.length ? currentPlayerIndex + 1 : 1;

    // iterate thru rolls and redistribute
    rolls.forEach((roll) => {
      players[currentPlayerIndex].chips =
        players[currentPlayerIndex].chips - 1 > 0
          ? players[currentPlayerIndex].chips - 1
          : 0;

      switch (roll) {
        case "P":
          players[portPlayerIndex].chips++;
          break;
        case "A":
          players[0].chips++;
          break;
        case "S":
          players[starboardPlayer].chips++;
          break;
        default:
      }
    });

    currentPlayerIndex =
      currentPlayerIndex + 1 >= players.length ? 1 : currentPlayerIndex + 1;
    setCurrentPlayerIndex(currentPlayerIndex);
  };

  return (
    <>
      {dice.map((value) => (
        <Die value={value} />
      ))}

      <br />
      <button onClick={rollDice}>Roll Dice</button>
    </>
  );
}

export default Dice;
