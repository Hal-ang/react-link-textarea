import * as react from 'react';
import { CSSProperties, TextareaHTMLAttributes } from 'react';

type TextareaAttributes = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "style" | "className">;
type LinkTargetType = "_blank" | "_self" | "_parent" | "_top" | string;
interface LinkingTextareaInterface extends TextareaAttributes {
    containerStyle?: CSSProperties;
    textareaStyle?: CSSProperties;
    containerClassName?: string;
    textareaClassName?: string;
    linkTarget?: LinkTargetType;
    fontColor?: CSSProperties["color"];
    caretColor?: CSSProperties["caretColor"];
}
declare const LinkingTextarea: react.ForwardRefExoticComponent<LinkingTextareaInterface & react.RefAttributes<HTMLTextAreaElement>>;

export { LinkingTextarea as default };
