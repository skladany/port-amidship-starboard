import styled from "styled-components";

function Die({ value }) {
  const DieStyle = styled.div`
    display: inline-block;
    color: black;
    font-weight: bold;
    background-color: white;
    border: 2px solid black;
    margin: 0.5rem;
    padding: 1rem;
    line-height: 1rem;
    width: 1rem;
    height: 1rem;
  `;

  return <DieStyle>{value}</DieStyle>;
}

export default Die;
