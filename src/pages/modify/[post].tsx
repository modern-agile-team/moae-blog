import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { PostEditor, MarkdownPostHeader } from "@component/MarkdownRender";
import SubmitContainer from "@component/MarkdownRender/SubmitContainer";
import { Loader } from "@component/Common/Loader";
import deviceAtom from "@recoil/deviceAtom";
import theme from "@styles/theme";
import { useCheckAuth } from "@hooks/index";
import withPostWriting from "@recoil/postWriting/withPostWriting";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { API_KEYS } from "@core/constant";
import * as APIS from "@core/apis";
import { useRouter } from "next/router";

const PostModifyPage = () => {
  const device = useRecoilValue(deviceAtom);
  const setPost = useSetRecoilState(withPostWriting);
  const router = useRouter();

  const { data } = useQuery([API_KEYS.BOARDS.GET_POST, router.query.post], () =>
    APIS.BOARDS.getPost(router.query.post as string)
  );

  const { isLoading } = useCheckAuth(() => {
    alert("로그인 이후에 이용할 수 있습니다.");
  });

  useEffect(() => {
    if (data) {
      const { data: currentPost } = data;
      setPost({ ...currentPost });
    }
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MarkdownPostHeader />
          <PostWrapper>
            <PostEditor />
          </PostWrapper>
          {device === "mobile" && <SubmitContainer />}
        </>
      )}
    </div>
  );
};

const PostWrapper = styled.div`
  padding: 0 6rem;
  min-height: 90vh;
  pre {
    padding: 0;
    margin: 20px 0 28px;
  }
  .MoaeBlogEditor {
    min-height: 90vh;
  }
  .ProseMirror,
  .toastui-editor-contents,
  .toastui-editor-md-preview {
    font-size: 16px;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.COLORS.MAIN};
    }
  }
  @media (max-width: 568px) {
    padding: 0;
    .ProseMirror,
    .toastui-editor-contents,
    .toastui-editor-md-preview {
      font-size: 14px;
      padding: 0;
    }
  }
`;

export default PostModifyPage;
