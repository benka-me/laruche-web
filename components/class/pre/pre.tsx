import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vsDark from "react-syntax-highlighter/dist/cjs/styles/prism/vs-dark";
import { FC } from "react";
import css from "./pre.scss";

interface Props {
  lang: string;
  setNumber?: boolean;
}
export const Pre: FC<Props> = ({ lang, children, setNumber }) => {
  return (
    <div className={css.pre}>
      <SyntaxHighlighter
        language={lang}
        style={vsDark}
        showLineNumbers={setNumber}
        wrapLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
