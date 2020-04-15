import React, { FC } from "react";
import { Bee, Rpc } from "graph/graphql";
import Lang from "components/langs/lang";
import { GiBee } from "react-icons/gi";
import { FaGitAlt } from "react-icons/fa";
import { FiHexagon } from "react-icons/fi";
import FrameworkComp from "components/framework/framework-comp";
import { Namespace } from "types/types";
import {
  ticket,
  beeBody,
  beeFooter,
  gitLink,
  beeGit,
  beeHeader,
  beeTitle,
  icon,
  gitIcon
} from "./bee-ticket.scss";
import { NamespaceLink } from "components/class/link/link";

interface Props {
  bee: Bee;
}
export default ({ bee }: Props) => (
  <div className={ticket}>
    <BeeHeader bee={bee} />
    <BeeBody bee={bee} />
    <BeeFooter bee={bee} />
  </div>
);

const BeeHeader: FC<{ bee: Bee }> = ({ bee }) => {
  const namespace = new Namespace(bee.Author, bee.Name);
  return (
    <div className={beeHeader}>
      <div className={icon}>
        <FiHexagon className={icon} />
      </div>
      <div className={beeTitle}>
        <NamespaceLink namespace={namespace} bee={bee} />
        <div className={beeGit}>
          <FaGitAlt className={gitIcon} />
          <div className={gitLink}>
            <p>{bee.Repo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const BeeBody: FC<{ bee: Bee }> = ({ bee }) => (
  <div className={beeBody}>
    <p>{bee.Description}</p>
  </div>
);
const BeeFooter: FC<{ bee: Bee }> = ({ bee }) => (
  <div className={beeFooter}>
    <FrameworkComp framework={bee.Framework} />
    <Lang lang={bee.DevLang} />
  </div>
);
