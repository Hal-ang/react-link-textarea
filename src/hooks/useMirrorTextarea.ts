import {
  CSSProperties,
  MutableRefObject,
  RefObject,
  useCallback,
  useMemo
} from "react";
import { parsePxToNumber, snakeToCamel } from "../util";

import { LinkTargetType } from "../types";
import linkifyStr from "linkify-string";

const useMirrorTextarea = (
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>,
  mirroredRef: RefObject<HTMLDivElement>
) => {
  const getContentAreaSize = (styles: CSSStyleDeclaration) => {
    if (!textareaRef?.current) {
      throw new Error("Textarea ref is not defined");
    }

    const xPadding =
      parsePxToNumber(styles.paddingLeft) +
      parsePxToNumber(styles.paddingRight);

    const yPadding =
      parsePxToNumber(styles.paddingTop) +
      parsePxToNumber(styles.paddingBottom);

    const { clientWidth, clientHeight } = textareaRef.current;

    return {
      width: clientWidth - xPadding + "px",
      height: clientHeight - yPadding + "px"
    };
  };

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(() => {
        if (!mirroredRef.current || !textareaRef.current) return;

        const { width, height } = getContentAreaSize(
          getComputedStyle(textareaRef.current)
        );

        mirroredRef.current.style.width = width;
        mirroredRef.current.style.height = height;
      }),
    [textareaRef, mirroredRef, getContentAreaSize]
  );

  const applyStyleToMirroredRef = useCallback(
    (style?: CSSProperties) => {
      if (!mirroredRef?.current || !textareaRef?.current) return;

      const stylesToCopy = [
        "border",
        "borderLeft",
        "borderRight",
        "borderTop",
        "borderBottom",
        "boxSizing",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "padding",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "margin",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "paddingBottom",
        "textDecoration",
        "textIndent",
        "textTransform",
        "whiteSpace",
        "wordSpacing",
        "wordWrap",
        "textAlign",
        "borderRadius"
      ];
      const textareaStyles = getComputedStyle(textareaRef.current);

      stylesToCopy.forEach((p: string) => {
        const property = snakeToCamel(p);

        // @ts-ignore
        mirroredRef.current.style[property] = textareaStyles[property];
      });

      mirroredRef.current.style.borderColor = "transparent";

      if (style?.color) {
        mirroredRef.current.style.color = style.color;
      }
      if (style?.backgroundColor) {
        mirroredRef.current.style.backgroundColor = style.backgroundColor;
      }
    },
    [mirroredRef, textareaRef]
  );

  const setLinkifyText = (linkTarget: LinkTargetType) => {
    if (!mirroredRef?.current || !textareaRef.current) return;

    mirroredRef.current.innerHTML = linkifyStr(textareaRef.current.value, {
      target: linkTarget
    });
  };

  const copyTextToMirroredRef = () => {
    if (!textareaRef?.current || !mirroredRef?.current) return;

    mirroredRef.current.textContent = textareaRef.current.value;
  };

  return {
    resizeObserver,
    applyStyleToMirroredRef,
    setLinkifyText,
    copyTextToMirroredRef
  };
};

export default useMirrorTextarea;
