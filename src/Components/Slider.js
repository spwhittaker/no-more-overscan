import React, { useState } from "react";
import { ImgContainer } from "./ImgContainer";
import wallpaper from "../images/Wallpaper_1080p_(24).jpg";
import styled from "styled-components";
import FlexSpan from "./FlexSpan";

const Slider = ({ height, width, className = "Slider" }) => {
  const [overscanVal, setOverscanVal] = useState(5);
  const remaining = (100 / (100 + overscanVal)) * 100;
  const pictureLoss = 100 - remaining;
  return (
    <div className={className}>
      <FlexSpan>
        <h3>Zoom percentage:</h3>
        <input
          name="overscan-percent"
          type="range"
          value={overscanVal}
          min="0"
          max="200"
          onChange={(e) => setOverscanVal(Number(e.target.value))}
        />
        <h3>{overscanVal}%</h3>
      </FlexSpan>

      <FlexSpan>
        <h3>Amount of the original image still visible:</h3>
        <h3>{remaining.toFixed(2)}%</h3>
      </FlexSpan>
      <FlexSpan>
        <h3>Amount of the original image lost:</h3>
        <h3>{pictureLoss.toFixed(2)}% </h3>
      </FlexSpan>
      <FlexSpan>
        <h3>Total pixels of original image:</h3>
        <h3>{1920 * 1080}</h3>
      </FlexSpan>
      <FlexSpan>
        <h3>Pixels lost to overscan:</h3>
        <h3>{Math.floor((1920 * 1080 * pictureLoss) / 100)}</h3>
      </FlexSpan>

      <ImgContainer overscan={overscanVal} height={height} width={width}>
        <img src={wallpaper} alt="Lovely wallpaper" />
      </ImgContainer>
    </div>
  );
};

export const StyledSlider = styled(Slider)`
  padding: 2em;
  margin: 1em;

  border: 5px black solid;
  border-radius: 2px;
`;
