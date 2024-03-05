import React, { ForwardedRef } from "react";

import { LinkingTextareaInterface } from "../types";
import LlinkingTextarea from "../LinkingTextarea";

const Classic = (props: LinkingTextareaInterface) => {
  return (
    <div>
      <LlinkingTextarea {...props} />
    </div>
  );
};

export default Classic;
