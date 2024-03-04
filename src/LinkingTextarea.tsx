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

export interface ContainerCustomInterface {
  containerStyle?: CSSProperties;
  containerClassName?: string;
}

export interface TextareaCustomInterface extends TextareaAttributes {
  textareaStyle?: CSSProperties;
  textareaClassName?: string;
  caretColor?: CSSProperties["caretColor"];
}
export interface MirrorCustomInterface {
  linkTarget?: LinkTargetType;
  fontColor?: CSSProperties["color"];
}

export interface LinkingTextareaInterface
  extends ContainerCustomInterface,
    TextareaCustomInterface,
    MirrorCustomInterface {}

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
      applyStyleToMirroredRef,
      setLinkifyStr,
      copyTextToMirroredRef
    } = useMirrorTextarea(textareaRef, mirroredRef);

    useEffect(() => {
      copyTextToMirroredRef();
      applyStyleToMirroredRef(textareaStyle);
    }, [textareaStyle, copyTextToMirroredRef]);

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

      const convertToLink = () => {
        setLinkifyStr(linkTarget);
      };

      textareaRef.current.addEventListener("scroll", handleScrollTop);
      textareaRef.current.addEventListener("input", convertToLink);

      return () => {
        textareaRef.current?.removeEventListener("scroll", handleScrollTop);
        textareaRef.current?.removeEventListener("input", convertToLink);
      };
    }, [textareaRef, mirroredRef, linkTarget, setLinkifyStr]);

    return (
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
    );
  }
);

export default LinkingTextarea;
