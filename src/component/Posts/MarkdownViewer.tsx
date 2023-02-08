import { useEffect } from "react";
import { Viewer } from "@toast-ui/react-editor";
import Prism from "prismjs";

import "prismjs/themes/prism.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

interface Props {
  initialValue: string;
  theme?: "dark" | "light";
}

const MarkdownViewer = ({ initialValue, theme = "light" }: Props) => {
  useEffect(() => {
    const codes = Array.from(document.getElementsByTagName("code"));
    for (const code of codes) {
      code.style.fontSize = "18px";
    }
  }, []);

  return (
    <Viewer
      theme={theme}
      usageStatistics={false}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      initialValue={initialValue}
    />
  );
};

export default MarkdownViewer;
