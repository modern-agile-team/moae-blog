import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { PostEditor, MarkdownPostHeader } from "@component/MarkdownRender";
import SubmitContainer from "@component/MarkdownRender/SubmitContainer";
import deviceAtom from "@recoil/deviceAtom";
import theme from "@styles/theme";
import { useQuery } from "react-query";
import { USER } from "@core/apis";
import { useRouter } from "next/router";
import { Loader } from "@component/Common/Loader";

const Write = () => {
  const device = useRecoilValue(deviceAtom);
  const router = useRouter();

  const { isLoading } = useQuery("checkUser", USER.checkAuth, {
    onError(err) {
      console.log(":::::", err);
      alert("로그인을 후에 이용할 수 있습니다.");
      router.back();
    },
  });

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

export default Write;
