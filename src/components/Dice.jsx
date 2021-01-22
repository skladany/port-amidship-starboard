import Die from "./Die";

function Dice({ dice }) {
  return (
    <>
      {dice.map((value, i) => (
        <Die value={value} key={i} />
      ))}
    </>
  );
}

export default Dice;
