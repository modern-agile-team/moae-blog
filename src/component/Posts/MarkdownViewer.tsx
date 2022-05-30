import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

interface Props {
  initialValue: string;
  theme?: "dark" | "light";
}

const MarkdownViewer = ({ initialValue, theme = "light" }: Props) => {
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
