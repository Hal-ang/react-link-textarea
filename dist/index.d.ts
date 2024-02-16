import * as react from 'react';
import { CSSProperties, TextareaHTMLAttributes } from 'react';

type TextareaAttributes = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'>;
type LinkTargetType = '_blank' | '_self' | '_parent' | '_top' | string;
interface LinkingTextareaInterface extends TextareaAttributes {
    style?: CSSProperties;
    linkTarget?: LinkTargetType;
    fontColor?: CSSProperties['color'];
    caretColor?: CSSProperties['caretColor'];
}
declare const LinkingTextarea: react.ForwardRefExoticComponent<LinkingTextareaInterface & react.RefAttributes<HTMLTextAreaElement>>;

export { LinkingTextarea as default };
