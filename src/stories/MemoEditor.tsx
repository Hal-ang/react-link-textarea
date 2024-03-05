import React, { useRef, useState } from "react";

import LinkingTextarea from "../LinkingTextarea";
import { LinkingTextareaInterface } from "../types";

const MemoEditor = ({ ...rest }: LinkingTextareaInterface) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCompleteEdit = () => {
    setIsEditing((ie) => !ie);
  };

  return (
    <div>
      <h3>mode : {isEditing ? "edit" : "viewer"}</h3>
      <LinkingTextarea {...rest} readOnly={!isEditing} />
      <button
        onClick={handleCompleteEdit}
        style={{
          backgroundColor: isEditing ? "gray" : "#4CAF50",
          color: "white",
          width: 100,
          height: 40,
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        {isEditing ? "Done" : "Edit"}
      </button>
    </div>
  );
};

export default MemoEditor;
