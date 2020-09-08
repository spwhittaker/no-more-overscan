import React, { setState } from "react";
import styled from "styled-components";
import nthChildText from "../nthChildText";
import { v4 as uuid } from "uuid";

// const Board = ({ className = "Board", colour1, colour2,  }) => {
//   const squareArr = [];

//   for (let i = 8 * 8; i > 0; i--) {
//     squareArr.push(i);
//     console.log(squareArr);
//   }
//   return (
//     <div className={className}>
//       {squareArr.map((e) => (
//         <div></div>
//       ))}
//     </div>
//   );
// };

const Board = ({ className = "Board", colour1, colour2, rowNum = 8 }) => {
  const squareArr = [];

  for (let i = rowNum * rowNum; i > 0; i--) {
    squareArr.push(i);
    /* console.log(squareArr); */
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
  border: black solid 1px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  > div {
    width: ${(props) => (props.rowNum ? 20 / props.rowNum : 2.5)}vw;
    height: ${(props) => (props.rowNum ? 20 / props.rowNum : 2.5)}vw;
    box-sizing: border-box;
    background: ${({ colour2 }) => (colour2 ? colour2 : "white")};
  }
  ${(props) => (props.rowNum ? nthChildText(props.rowNum) : nthChildText(8))} {
    background-color: ${({ colour1 }) => (colour1 ? colour1 : "black")};
  }
`;
/* export const CheckerboardSmall = styled(Board)`
  width: 20vw;
  height: 20vw;
  margin: 1em;
  border: black solid 1px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  > div {
    width: ${10 / 3}vw;
    height: ${10 / 3}vw;
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
`; */

export const CheckerboardContainer = styled.div`
  display: inline-flex;
`;
