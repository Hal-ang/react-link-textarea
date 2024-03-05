import { CSSProperties, MutableRefObject, RefObject } from "react";
import { LinkTargetType } from "../types";
declare const useMirrorTextarea: (textareaRef: MutableRefObject<HTMLTextAreaElement | null>, mirroredRef: RefObject<HTMLDivElement>) => {
    resizeObserver: ResizeObserver;
    applyStyleToMirroredRef: (style?: CSSProperties) => void;
    setLinkifyText: (linkTarget: LinkTargetType) => void;
    copyTextToMirroredRef: () => void;
};
export default useMirrorTextarea;
