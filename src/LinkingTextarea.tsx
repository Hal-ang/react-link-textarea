import "./style/index.css";

import {
  CSSProperties,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useRef
} from "react";

import useMirrorTextarea from "./hooks/useMirrorTextarea";

type TextareaAttributes = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "style" | "className"
>;
export type LinkTargetType = "_blank" | "_self" | "_parent" | "_top" | string;
interface LinkingTextareaInterface extends TextareaAttributes {
  containerStyle?: CSSProperties;
  textareaStyle?: CSSProperties;
  containerClassName?: string;
  textareaClassName?: string;
  linkTarget?: LinkTargetType;
  fontColor?: CSSProperties["color"];
  caretColor?: CSSProperties["caretColor"];
}

const LinkingTextarea = forwardRef(
  (
    {
      containerStyle,
      textareaStyle,
      containerClassName = "",
      textareaClassName = "",
      linkTarget,
      fontColor = "black",
      caretColor = "black",
      ...rest
    }: LinkingTextareaInterface,
    forwardedRef: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const mirroredRef = useRef<HTMLDivElement>(null);

    const {
      resizeObserver,
      overwriteStyleToMirroredRef,
      setLinkifyStr,
      overwireTextToMirroredRef
    } = useMirrorTextarea(textareaRef, mirroredRef);

    useEffect(() => {
      overwireTextToMirroredRef();
      overwriteStyleToMirroredRef(textareaStyle);
      setLinkifyStr(linkTarget);
    }, [textareaStyle, overwireTextToMirroredRef]);

    useEffect(() => {
      if (!textareaRef?.current) return;
      resizeObserver.observe(textareaRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [textareaRef, resizeObserver]);

    useEffect(() => {
      if (!textareaRef?.current || !mirroredRef?.current) return;

      const handleScrollTop = () => {
        if (!textareaRef.current || !mirroredRef.current) return;
        mirroredRef.current.scrollTop = textareaRef.current.scrollTop;
      };

      textareaRef.current.addEventListener("scroll", handleScrollTop);

      const convertToLink = () => {
        setLinkifyStr(linkTarget);
      };

      textareaRef.current.addEventListener("input", convertToLink);

      return () => {
        textareaRef.current?.removeEventListener("scroll", handleScrollTop);
        textareaRef.current?.removeEventListener("input", convertToLink);
      };
    }, [textareaRef, mirroredRef, linkTarget]);

    return (
      <>
        <div
          className={`link-textarea-container ${containerClassName}`}
          style={{ ...containerStyle, position: "relative" }}
        >
          <textarea
            ref={(node) => {
              textareaRef.current = node;
              if (typeof forwardedRef === "function") {
                forwardedRef(node);
              } else if (forwardedRef) {
                forwardedRef.current = node;
              }
            }}
            className={`link-textarea-container__textarea ${textareaClassName}`}
            style={{
              width: "100%",
              height: "100%",
              caretColor,
              ...textareaStyle,
              color: "transparent",
              position: "relative"
            }}
            {...rest}
          />
          <div
            className="link-textarea-container__mirror"
            ref={mirroredRef}
            style={{
              color: fontColor,
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              userSelect: "none",
              overflow: "hidden",
              pointerEvents: "none"
            }}
          />
        </div>
      </>
    );
  }
);

export default LinkingTextarea;
