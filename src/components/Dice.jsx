import Die from "./Die";

function Dice({ dice, setDice }) {
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
