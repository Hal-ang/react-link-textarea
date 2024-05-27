"use client";

import "./style/index.css";

import { ForwardedRef, forwardRef, useEffect, useRef } from "react";

import { LinkingTextareaInterface } from "./types";
import useMirrorTextarea from "./hooks/useMirrorTextarea";

const LinkingTextarea = forwardRef(
  (
    {
      containerStyle = {},
      textareaStyle = {},
      containerClassName = "",
      textareaClassName = "",
      linkTarget = "_blank",
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
      setLinkifyText,
      copyTextToMirroredRef
    } = useMirrorTextarea(textareaRef, mirroredRef);

    useEffect(() => {
      copyTextToMirroredRef();
      applyStyleToMirroredRef(textareaStyle);
      setLinkifyText(linkTarget);
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
        setLinkifyText(linkTarget);
      };

      textareaRef.current.addEventListener("scroll", handleScrollTop);
      textareaRef.current.addEventListener("input", convertToLink);

      return () => {
        textareaRef.current?.removeEventListener("scroll", handleScrollTop);
        textareaRef.current?.removeEventListener("input", convertToLink);
      };
    }, [textareaRef, mirroredRef, linkTarget, setLinkifyText]);

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
          ref={mirroredRef}
          className="link-textarea-container__mirror"
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
