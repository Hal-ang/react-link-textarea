import React, { ForwardedRef } from "react";

import { LinkingTextareaInterface } from "../types";
import LlinkingTextarea from "../LinkingTextarea";

const Classic = (props: LinkingTextareaInterface) => {
  return (
    <div>
      <h1 className="pl-[20px]">Textarea</h1>
      <LlinkingTextarea {...props} />
    </div>
  );
};

export default Classic;
