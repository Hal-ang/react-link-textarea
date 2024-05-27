/// <reference types="react" />
import * as react from 'react';
import { CSSProperties, TextareaHTMLAttributes } from 'react';

type TextareaAttributes = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "style" | "className">;
type LinkTargetType = "_blank" | "_self" | "_parent" | "_top" | string;
interface ContainerCustomInterface {
    containerStyle?: CSSProperties;
    containerClassName?: string;
}
interface TextareaCustomInterface extends TextareaAttributes {
    textareaStyle?: CSSProperties;
    textareaClassName?: string;
    caretColor?: CSSProperties["caretColor"];
}
interface MirrorCustomInterface {
    linkTarget?: LinkTargetType;
    fontColor?: CSSProperties["color"];
}
interface LinkingTextareaInterface extends ContainerCustomInterface, TextareaCustomInterface, MirrorCustomInterface {
}

declare const LinkingTextarea: react.ForwardRefExoticComponent<LinkingTextareaInterface & react.RefAttributes<HTMLTextAreaElement>>;

export { LinkingTextarea as default };
