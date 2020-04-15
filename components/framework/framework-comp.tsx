import { FC } from "react";
import { Framework } from "graph/graphql";
import { FaBoxes } from "react-icons/fa";
import css from "./framework.scss";

interface Props {
  framework: Framework;
}
export default ({ framework }: Props) => (
  <div className={css.framework}>
    <FaBoxes className={css.faBoxes} />
    {name === undefined ? <Void /> : <Named name={framework.Name} />}
  </div>
);

const Void = () => (
  <div>
    <p>: void</p>
  </div>
);
const Named = ({ name }) => (
  <div>
    <p>: {name}</p>
  </div>
);
