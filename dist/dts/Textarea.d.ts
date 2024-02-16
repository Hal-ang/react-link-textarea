import './style/index.css';
import { CSSProperties, TextareaHTMLAttributes } from 'react';
type TextareaAttributes = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>;
export type LinkTargetType = '_blank' | '_self' | '_parent' | '_top' | string;
interface TextareaInterface extends TextareaAttributes {
    style?: CSSProperties;
    linkTarget?: LinkTargetType;
    fontColor?: CSSProperties['color'];
    caretColor?: CSSProperties['caretColor'];
}
declare const Textarea: import("react").ForwardRefExoticComponent<TextareaInterface & import("react").RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
