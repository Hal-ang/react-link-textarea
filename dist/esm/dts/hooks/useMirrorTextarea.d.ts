import { CSSProperties, MutableRefObject, RefObject } from "react";
import { LinkTargetType } from "../LinkingTextarea";
declare const useMirrorTextarea: (textareaRef: MutableRefObject<HTMLTextAreaElement | null>, mirroredRef: RefObject<HTMLDivElement>) => {
    resizeObserver: ResizeObserver;
    overwriteStyleToMirroredRef: (style?: CSSProperties) => void;
    setLinkifyStr: (linkTarget?: LinkTargetType) => void;
    overwireTextToMirroredRef: () => void;
};
export default useMirrorTextarea;
