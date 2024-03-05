import React, { useState } from "react";

import { LinkingTextareaInterface } from "../types";
import LlinkingTextarea from "../LinkingTextarea";

const FontSizeSlider = (props: LinkingTextareaInterface) => {
  const [fontSize, setFontSize] = useState(14);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(event.target.value));
  };

  return (
    <div>
      <LlinkingTextarea
        {...props}
        textareaStyle={{ ...props.textareaStyle, fontSize }}
      >
        https://github.com/Hal-ang/react-link-textarea
      </LlinkingTextarea>
      <div style={{ marginTop: "10px" }}>
        <label htmlFor="font-size-slider">Font Size: </label>
        <input
          type="range"
          id="font-size-slider"
          min="10"
          max="30"
          value={fontSize}
          onChange={handleSliderChange}
        />
        <span>{fontSize}px</span>
      </div>
    </div>
  );
};

export default FontSizeSlider;
