import { CSSProperties, MutableRefObject, RefObject } from 'react';
import { LinkTargetType } from '../Textarea';
declare const useTextarea: (textareaRef: MutableRefObject<HTMLTextAreaElement | null>, mirroredRef: RefObject<HTMLDivElement>) => {
    resizeObserver: ResizeObserver;
    overwriteStyleToMirroredRef: (style?: CSSProperties) => void;
    setLinkifyStr: (linkTarget?: LinkTargetType) => void;
    overwireTextToMirroredRef: () => void;
};
export default useTextarea;
