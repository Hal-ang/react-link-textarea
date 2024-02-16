import {
  CSSProperties,
  MutableRefObject,
  RefObject,
  useCallback,
  useMemo,
} from 'react';
import {parsePxToNumber, snakeToCamel} from '../util';

import {LinkTargetType} from '../LinkingTextarea';
import linkifyStr from 'linkify-string';

const useMirrorTextarea = (
  textareaRef: MutableRefObject<HTMLTextAreaElement | null>,
  mirroredRef: RefObject<HTMLDivElement>,
) => {
  const getValidContentWidth = useCallback(
    (styles: CSSStyleDeclaration) => {
      if (!textareaRef?.current) {
        throw new Error('Textarea ref is not defined');
      }

      const padding = parsePxToNumber(styles.padding);
      const paddingLeft = parsePxToNumber(styles.paddingLeft);
      const paddingRight = parsePxToNumber(styles.paddingRight);

      return (
        textareaRef.current.clientWidth -
        (padding ? padding * 2 : paddingLeft + paddingRight) +
        'px'
      );
    },
    [textareaRef],
  );

  const getValidContentHeight = useCallback(
    (styles: CSSStyleDeclaration) => {
      if (!textareaRef?.current) {
        throw new Error('Textarea ref is not defined');
      }
      const padding = parsePxToNumber(styles.padding);
      const paddingTop = parsePxToNumber(styles.paddingTop);
      const paddingBottom = parsePxToNumber(styles.paddingBottom);

      return (
        textareaRef.current.clientHeight -
        (padding ? padding * 2 : paddingTop + paddingBottom) +
        'px'
      );
    },
    [textareaRef],
  );

  const resizeObserver = useMemo(() => {
    return new ResizeObserver(() => {
      if (!mirroredRef.current || !textareaRef.current) return;

      const textareaStyles = getComputedStyle(textareaRef.current);

      mirroredRef.current.style.width = getValidContentWidth(textareaStyles);
      mirroredRef.current.style.height = getValidContentHeight(textareaStyles);
    });
  }, [textareaRef, mirroredRef, getValidContentWidth, getValidContentHeight]);

  const overwriteStyleToMirroredRef = useCallback(
    (style?: CSSProperties) => {
      if (!mirroredRef.current || !textareaRef.current) return;

      const textareaStyles = getComputedStyle(textareaRef.current);

      [
        'border',
        'boxSizing',
        'fontFamily',
        'fontSize',
        'fontWeight',
        'letterSpacing',
        'lineHeight',
        'padding',
        'textDecoration',
        'textIndent',
        'textTransform',
        'whiteSpace',
        'wordSpacing',
        'wordWrap',
        'textAlign',
      ].forEach((p: string) => {
        if (!mirroredRef.current) return;

        const property = snakeToCamel(p);

        // @ts-ignore
        mirroredRef.current.style[property] = textareaStyles[property];
      });

      mirroredRef.current.style.borderColor = 'transparent';

      if (style?.color) {
        mirroredRef.current.style.color = style.color;
      }
      if (style?.backgroundColor) {
        mirroredRef.current.style.backgroundColor = style.backgroundColor;
      }
    },
    [mirroredRef, textareaRef],
  );

  const setLinkifyStr = useCallback(
    (linkTarget?: LinkTargetType) => {
      if (!mirroredRef?.current || !textareaRef.current) return;

      mirroredRef.current.innerHTML = linkifyStr(textareaRef.current.value, {
        target: linkTarget || '_blank',
      });
    },
    [linkifyStr, mirroredRef],
  );

  const overwireTextToMirroredRef = useCallback(() => {
    if (!textareaRef?.current || !mirroredRef?.current) return;

    mirroredRef.current.textContent = textareaRef.current.value;
  }, [textareaRef, mirroredRef]);

  return {
    resizeObserver,
    overwriteStyleToMirroredRef,
    setLinkifyStr,
    overwireTextToMirroredRef,
  };
};

export default useMirrorTextarea;
