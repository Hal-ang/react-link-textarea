import { CSSProperties, TextareaHTMLAttributes } from "react";

type TextareaAttributes = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "style" | "className"
>;
export type LinkTargetType = "_blank" | "_self" | "_parent" | "_top" | string;

export interface ContainerCustomInterface {
  containerStyle?: CSSProperties;
  containerClassName?: string;
}

export interface TextareaCustomInterface extends TextareaAttributes {
  textareaStyle?: CSSProperties;
  textareaClassName?: string;
  caretColor?: CSSProperties["caretColor"];
}
export interface MirrorCustomInterface {
  linkTarget?: LinkTargetType;
  fontColor?: CSSProperties["color"];
}

export interface LinkingTextareaInterface
  extends ContainerCustomInterface,
    TextareaCustomInterface,
    MirrorCustomInterface {}
