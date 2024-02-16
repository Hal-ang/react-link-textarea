import * as react from 'react';
import { CSSProperties, TextareaHTMLAttributes } from 'react';

type TextareaAttributes = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>;
type LinkTargetType = '_blank' | '_self' | '_parent' | '_top' | string;
interface TextareaInterface extends TextareaAttributes {
    style?: CSSProperties;
    linkTarget?: LinkTargetType;
    fontColor?: CSSProperties['color'];
    caretColor?: CSSProperties['caretColor'];
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaInterface & react.RefAttributes<HTMLTextAreaElement>>;

export { Textarea as default };
