import React, { useEffect, useState } from "react";

import { LinkingTextareaInterface } from "../types";
import LlinkingTextarea from "../LinkingTextarea";

const ColorChangingTextarea = ({
  textareaStyle,
  ...rest
}: LinkingTextareaInterface) => {
  const [bgColor, setBgColor] = useState("#f0f0f0");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX / window.innerWidth;
      const mouseY = event.clientY / window.innerHeight;
      const newColor = `rgb(${Math.floor(mouseX * 255)}, ${Math.floor(
        mouseY * 255
      )}, ${Math.floor((mouseX + mouseY) * 100)})`;
      setBgColor(newColor);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <LlinkingTextarea
      {...rest}
      textareaStyle={{ ...textareaStyle, backgroundColor: bgColor }}
    />
  );
};

export default ColorChangingTextarea;
