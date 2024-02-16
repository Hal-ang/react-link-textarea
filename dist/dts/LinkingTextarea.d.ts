import './style/index.css';
import { CSSProperties, TextareaHTMLAttributes } from 'react';
type TextareaAttributes = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>;
export type LinkTargetType = '_blank' | '_self' | '_parent' | '_top' | string;
interface LinkingTextareaInterface extends TextareaAttributes {
    style?: CSSProperties;
    linkTarget?: LinkTargetType;
    fontColor?: CSSProperties['color'];
    caretColor?: CSSProperties['caretColor'];
}
declare const LinkingTextarea: import("react").ForwardRefExoticComponent<LinkingTextareaInterface & import("react").RefAttributes<HTMLTextAreaElement>>;
export default LinkingTextarea;