import css from "./line.scss";
import { FC, ReactElement } from "react";

type Props = {
}
export const Divider:FC<Props> = props => {
  return <div className={css.horizontal}></div>;
};