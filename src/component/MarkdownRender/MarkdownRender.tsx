import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import S3 from "react-aws-s3-typescript";
import Prism from "prismjs";
import { Editor } from "@toast-ui/react-editor";

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

interface Props {
  theme?: "dark" | "light";
}

const MarkDownRender = ({ theme = "light" }: Props) => {
  const region = "ap-northeast-2";
  const bucket = "moae-blog-images";
  const [post, setPost] = useRecoilState(withPostWriting);
  const [isLoaded, setIsLoaded] = useState(false);

  const ref = useRef<Editor>(null);

  const onChange = () => {
    setPost({ ...post, context: ref.current?.getInstance().getMarkdown() || "" });
  };

  const handleFileInput = async (blob: Blob | File) => {
    const s3config = {
      bucketName: bucket as string,
      region: region as string,
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
    };

    const S3Client = new S3(s3config);
    const result = await S3Client.uploadFile(blob as File, uuidv4());
    return result;
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
        previewStyle="vertical"
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        initialValue={post.context}
        placeholder={`글을 작성해 보세요`}
        onChange={onChange}
        theme={theme}
        language="ko-KR"
        hooks={{
          async addImageBlobHook(blob, callback) {
            const imageData = await handleFileInput(blob);
            callback(imageData.location);
          },
        }}
      />
    </>
  );
};

export default MarkDownRender;
