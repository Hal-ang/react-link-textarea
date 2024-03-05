import React, { useState } from "react";

import LinkingTextarea from "../LinkingTextarea";
import { LinkingTextareaInterface } from "../types";

const RotatingTextarea = (props: LinkingTextareaInterface) => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const getBackgroundColor = (text: string) => {
    const length = text.length;
    if (length < 10) {
      return "#f0f0f0"; // light gray
    } else if (length < 20) {
      return "#d3f8d3"; // light green
    } else if (length < 30) {
      return "#f9f6c8"; // light yellow
    } else {
      return "#ffcccc"; // light red
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        perspective: "1000px"
      }}
    >
      <LinkingTextarea
        {...props}
        textareaStyle={{
          ...props.textareaStyle,
          backgroundColor: getBackgroundColor(text)
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default RotatingTextarea;
