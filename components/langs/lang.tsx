import { DiGo, DiJsBadge, DiPython } from "react-icons/di";
import cssLang from "./lang.scss";

export default ({ lang }) => (
  <div className={cssLang.lang}>
    {langs[lang].icon}
    <p>{langs[lang].name}</p>
  </div>
);


type Lang = {
  icon: JSX.Element;
  name: string;
};
const langs: Lang[] = [
  {
    icon: <DiGo className={cssLang.go} />,
    name: "Go"
  },
  {
    icon: <DiJsBadge className={cssLang.javascript} />,
    name: "Javascript"
  },
  {
    icon: <DiPython className={cssLang.python} />,
    name: "Python"
  }
];
