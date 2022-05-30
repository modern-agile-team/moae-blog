import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  theme?: "dark" | "light";
}

const MarkDownRender = ({ theme = "light" }: Props) => {
  const [markdownValue, setMarkdownValue] = useState<string | undefined>(``);

  const ref = useRef<Editor>(null);

  const onChange = () => {
    setMarkdownValue(ref.current?.getInstance().getMarkdown());
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current.getRootElement().className = "MoaeBlogEditor";
  }, []);

  return (
    <>
      <Editor
        ref={ref}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        previewStyle="vertical"
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        initialValue={` `}
        placeholder={`글을 작성해 보세요`}
        onChange={onChange}
        theme={theme}
      />
    </>
  );
};

export default MarkDownRender;
