import styled from "styled-components";

function Chip() {
  const ChipStyle = styled.div`
    display: inline-block;
    color: white;
    background-color: blue;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 2rem;
    line-height: 1rem;
    width: 1rem;
    height: 1rem;
  `;

  return <ChipStyle></ChipStyle>;
}

export default Chip;
