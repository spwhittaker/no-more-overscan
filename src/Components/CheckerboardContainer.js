import React, { useState } from "react";
import { Checkerboard } from "./Checkerboard";

function CheckerboardContainer({ board2RowNum = 8 }) {
  const [leftValState, setLeftVal] = useState("50");
  return (
    <div
      style={{
        display: "inline-flex",
        position: "relative",
        height: "25vw",
      }}
    >
      <input
        type="range"
        value={leftValState}
        min="0"
        max="50"
        onChange={(e) => setLeftVal(e.target.value)}
        style={{
          top: "0",
          width: "80vw",
          maxWidth: "3in",
          left: "00vw",
          position: "absolute",
        }}
      />
      <Checkerboard rowNum={8} />
      <Checkerboard
        leftVal={leftValState + "vw"}
        style={{ display: "inline-block" }}
        rowNum={board2RowNum}
        colour1="rgba(255,0,155, 0.5)"
        colour2="rgba(0,255,251, 0.5)"
      />
    </div>
  );
}

export default CheckerboardContainer;
