import Chip from "./Chip";

function Player({ name, c }) {
  return (
    <>
      <h2>
        {name}:{c}
      </h2>
      {[...Array(parseInt(c))].map((e, i) => (
        <Chip key={i} />
      ))}
    </>
  );
}

export default Player;
