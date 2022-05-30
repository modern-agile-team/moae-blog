import dynamic from "next/dynamic";

interface Props {
  theme?: "dark" | "light";
}

const MarkdownRender = dynamic(() => import("./MarkdownRender"), { ssr: false });

const PostEditor = ({ theme = "light" }: Props) => {
  return <MarkdownRender theme={theme} />;
};

export default PostEditor;
