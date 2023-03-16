import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Prism from "prismjs";
import { Editor } from "@toast-ui/react-editor";

import * as APIS from "@core/apis";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "prismjs/themes/prism.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import withPostWriting from "@recoil/postWriting/withPostWriting";
import deviceAtom from "@recoil/deviceAtom";
import { useMutation } from "react-query";
import { API_KEYS } from "@core/constant";

interface Props {
  theme?: "dark" | "light";
}

const MarkDownRender = ({ theme = "light" }: Props) => {
  const device = useRecoilValue(deviceAtom);
  const [post, setPost] = useRecoilState(withPostWriting);
  const { mutateAsync: uploadImage } = useMutation(API_KEYS.IMAGE.UPLOADS, APIS.IMAGE.uploadsImage);

  const ref = useRef<Editor>(null);

  const onChange = () => {
    setPost({ ...post, context: ref.current?.getInstance().getMarkdown() || "" });
  };

  const addImageBlobHook = async (blob: Blob | File, callback: (url: string, text?: string) => void) => {
    const originBlobName = URL.createObjectURL(blob).replace("blob:http://localhost:3000/", "");
    const blobToFile = new File([blob], originBlobName, { type: blob.type });

    const formData = new FormData();
    formData.append("files", blobToFile, blobToFile.name);
    const { data: imageInS3 } = await uploadImage(formData);

    callback("https://d2vqgz9qa2lpq5.cloudfront.net/content/" + imageInS3.names[0]);
  };

  useEffect(() => {
    if (!ref.current) return;
    ref.current.getRootElement().className = "MoaeBlogEditor";
  }, []);

  return (
    <>
      <Editor
        ref={ref}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax]}
        previewStyle={device !== "mobile" ? "vertical" : "tab"}
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        initialValue={post.context}
        placeholder={`글을 작성해 보세요`}
        onChange={onChange}
        theme={theme}
        language="ko-KR"
        hooks={{ addImageBlobHook: addImageBlobHook }}
      />
    </>
  );
};

export default MarkDownRender;
