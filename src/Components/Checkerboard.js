import React from "react";
import styled from "styled-components";

const Board = ({ className = "Board", colour1, colour2 }) => {
  const squareArr = [];

  for (let i = 8 * 8; i > 0; i--) {
    squareArr.push(i);
    console.log(squareArr);
  }
  return (
    <div className={className}>
      {squareArr.map((e) => (
        <div></div>
      ))}
    </div>
  );
};

export const Checkerboard = styled(Board)`
  width: 20vw;
  height: 20vw;
  margin: 1em;
  border: black solid 1px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  > div {
    width: 2.5vw;
    height: 2.5vw;
    box-sizing: border-box;
    background: ${({ colour2 }) => (colour2 ? colour2 : "white")};
  }
  div:nth-child(16n + 1),
  div:nth-child(16n + 3),
  div:nth-child(16n + 5),
  div:nth-child(16n + 7),
  div:nth-child(16n + 10),
  div:nth-child(16n + 12),
  div:nth-child(16n + 14),
  div:nth-child(16n) {
    background-color: ${({ colour1 }) => (colour1 ? colour1 : "black")};
  }
`;
