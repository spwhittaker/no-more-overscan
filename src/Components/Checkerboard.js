import React from "react";
import styled from "styled-components";
import nthChildText from "../nthChildText";
import { v4 as uuid } from "uuid";

const Board = ({
  className = "Board",
  colour1,
  colour2,
  rowNum = 8,
  leftVal = 0,
}) => {
  const squareArr = [];

  for (let i = rowNum * rowNum; i > 0; i--) {
    squareArr.push(i);
  }

  return (
    <div className={className}>
      {squareArr.map((e) => (
        <div key={uuid()}></div>
      ))}
    </div>
  );
};

export const Checkerboard = styled(Board)`
  width: 20vw;
  height: 20vw;
  margin: 1em;
  position: absolute;
  top: 3vw;
  left: ${(props) => (props.leftVal ? props.leftVal : 0)};
  border: black solid 2px;
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  > div {
    width: ${(props) => (props.rowNum ? 20 / props.rowNum : 2.5)}vw;
    height: ${(props) => (props.rowNum ? 20 / props.rowNum : 2.5)}vw;
    /*  box-sizing: border-box; */
    background: ${({ colour2 }) => (colour2 ? colour2 : "white")};
  }
  ${(props) => (props.rowNum ? nthChildText(props.rowNum) : nthChildText(8))} {
    background-color: ${({ colour1 }) => (colour1 ? colour1 : "black")};
  }
`;
