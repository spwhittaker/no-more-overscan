import React, { useState } from "react";
import { ImgContainer } from "./ImgContainer";
import wallpaper from "../images/Wallpaper_1080p_(24).jpg";

export default ({ height, width }) => {
  const [overscanVal, setOverscanVal] = useState(5);
  const remaining = (100 / (100 + overscanVal)) * 100;
  const pictureLoss = 100 - remaining;
  return (
    <>
      <h1>Zoom percentage: {overscanVal}%</h1>
      <input
        type="range"
        value={overscanVal}
        min="0"
        max="200"
        onChange={(e) => setOverscanVal(Number(e.target.value))}
      />
      <h1>
        Amount of the original image still visble: {remaining.toFixed(2)}%
      </h1>
      <h1>Amount of the original image lost: {pictureLoss.toFixed(2)}% </h1>
      <h1>Total pixels of original image: {1920 * 1080}</h1>
      <h1>
        Pixels lost to overscan: {Math.round((1920 * 1080 * pictureLoss) / 100)}
      </h1>

      <ImgContainer overscan={overscanVal} height={height} width={width}>
        <img src={wallpaper} alt="Lovely wallpaper" />
      </ImgContainer>
    </>
  );
};
