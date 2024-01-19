import React from "react";
import { useSelector } from "react-redux";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import coldDark from "react-syntax-highlighter/dist/esm/styles/prism/coldark-dark";
import coldLight from "react-syntax-highlighter/dist/esm/styles/prism/coldark-cold";

import { Copy } from "lucide-react";

import styles from "./Posts.module.scss";

function CodeHighlighter({ className, children }) {
  const theme = useSelector((state) => state.theme.currentTheme);

  let lang = "text"; // default monospaced text

  if (className && className.startsWith("lang-")) {
    lang = className.replace("lang-", "");
    switch (lang) {
      case "c#":
        lang = "csharp";
        break;
    }
  }

  return (
    <div className={styles.postCodeHighlighter}>
      {lang != "text" ? (
        <div className={styles.postCodeWrapper}>
          <SyntaxHighlighter
            showLineNumbers={true}
            wrapLines={true}
            wrapLongLines={true}
            language={lang.toLowerCase()}
            style={theme == "dark" ? coldDark : coldLight}
          >
            {children}
          </SyntaxHighlighter>

          <Copy />
        </div>
      ) : (
        <div className={styles.postInlineCodeWrapper}>{children}</div>
      )}
    </div>
  );
}

export default CodeHighlighter;
