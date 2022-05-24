import dynamic from "next/dynamic";
import styled from "styled-components";
import theme from "../../styles/theme";

const MarkdownViewer = dynamic(() => import("./MarkdownViewer"), { ssr: false });

interface Props {
  description: string;
}

const PostArticle = ({ description }: Props) => {
  return (
    <Wrapper>
      <MarkdownViewer initialValue={description} />
    </Wrapper>
  );
};

export default PostArticle;

const Wrapper = styled.article`
  margin-top: 3rem;
  width: 100%;
  p {
    font-size: ${theme.FONT.NORMAL.fontSize};
    line-height: ${theme.FONT.NORMAL.lineHeight};
  }
  @media (max-width: 568px) {
    padding-right: 0;
  }
`;
