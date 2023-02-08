import dynamic from "next/dynamic";
import styled from "styled-components";
import theme from "@styles/theme";
import { Suspense } from "react";
import { Loader } from "@component/Common/Loader";

const MarkdownViewer = dynamic(() => import("./MarkdownViewer"), { ssr: false, suspense: true });

interface Props {
  context: string;
}

const PostArticle = ({ context }: Props) => {
  return (
    <Suspense
      fallback={
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      }
    >
      <Wrapper>
        <MarkdownViewer initialValue={context} />
      </Wrapper>
    </Suspense>
  );
};

export default PostArticle;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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
