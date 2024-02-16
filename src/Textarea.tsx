import './style/index.css';

import {
  CSSProperties,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
} from 'react';

import useTextarea from './hooks/useTextarea';

type TextareaAttributes = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'style'
>;
export type LinkTargetType = '_blank' | '_self' | '_parent' | '_top' | string;
interface TextareaInterface extends TextareaAttributes {
  style?: CSSProperties;
  linkTarget?: LinkTargetType;
  fontColor?: CSSProperties['color'];
  caretColor?: CSSProperties['caretColor'];
}

const Textarea = forwardRef(
  (
    {
      style,
      linkTarget,
      fontColor = 'black',
      caretColor = 'black',
      ...rest
    }: TextareaInterface,
    forwardedRef: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const mirroredRef = useRef<HTMLDivElement>(null);

    const {
      resizeObserver,
      overwriteStyleToMirroredRef,
      setLinkifyStr,
      overwireTextToMirroredRef,
    } = useTextarea(textareaRef, mirroredRef);

    useEffect(() => {
      overwireTextToMirroredRef();
      overwriteStyleToMirroredRef(style);
    }, [overwireTextToMirroredRef, overwriteStyleToMirroredRef, style]);

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

      textareaRef.current.addEventListener('scroll', handleScrollTop);

      const convertToLink = () => {
        setLinkifyStr(linkTarget);
      };

      textareaRef.current.addEventListener('input', convertToLink);

      convertToLink();

      return () => {
        textareaRef.current?.removeEventListener('scroll', handleScrollTop);
        textareaRef.current?.removeEventListener('input', convertToLink);
      };
    }, [textareaRef, mirroredRef, linkTarget, setLinkifyStr]);

    return (
      <>
        <div className="container" style={{position: 'relative'}}>
          <textarea
            ref={node => {
              textareaRef.current = node;

              if (typeof forwardedRef === 'function') {
                forwardedRef(node);
              } else if (forwardedRef) {
                forwardedRef.current = node;
              }
            }}
            className={`container__textarea ${rest.className}`}
            style={{
              caretColor,
              ...style,
              color: 'transparent',
              position: 'relative',
            }}
            {...rest}
          />
          <div
            className="container__mirror"
            ref={mirroredRef}
            style={{
              color: fontColor,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              userSelect: 'none',
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
          />
        </div>
      </>
    );
  },
);

export default Textarea;
