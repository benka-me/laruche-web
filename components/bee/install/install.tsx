import React, { FC, useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CopyToClipboard from "react-copy-to-clipboard";
import css from "./install.scss";
import { Namespace } from "../../../types/types";

interface InstallProps {
  namespace: Namespace;
}
export default ({ namespace }: InstallProps) => {
  const code: string = `$> hive i ${namespace.getString()}`;
  const [done, setDone] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (done) id = setTimeout(() => setDone(false), 3000);

    return () => clearTimeout(id);
  }, [done]);

  return (
    <div className={css.install}>
      <CopyToClipboard text={code} onCopy={() => setDone(true)}>
        <button className={done ? css.installDone : css.installButton}>
          <SyntaxHighlighter language="terminal" style={solarizedDark}>
            {code}
          </SyntaxHighlighter>
          {/* <p className={css.copy}>copy ⎘</p> */}
        </button>
      </CopyToClipboard>
      {done ? <p className={css.copied}>Copied!</p> : null}
    </div>
  );
};

