import { FC, CSSProperties } from "react";
import css from "./button.scss";
import { OnClick } from "types/types";

const none = "";
declare global {
  interface String {
    spaced: () => string;
  }
}

String.prototype.spaced = function(): string {
  return this + " ";
};

interface ButtonProps {
  children: any;
  style?: CSSProperties;
  circular?: boolean;
  link?: boolean;
  color: "warning" | "error" | "info" | "red" | "blue";
  design: "rounded" | "background";
  onClick?: OnClick;
  fluid?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default (props: ButtonProps) => {
  const className =
    props.className + " " +
    css.btn.spaced() +
    (props.circular ? css.circular.spaced() : none) +
    (props.color ? props.color.spaced() : none) +
    (props.design ? props.design.spaced() : none) +
    (props.fluid ? css.fluid.spaced() : none);
  return (
    <>
      <button
      disabled={props.disabled}
        style={props.style}
        onClick={props.onClick}
        className={className}
        type={props.type}
      >
        {props.children}
      </button>
    </>
  );
};
