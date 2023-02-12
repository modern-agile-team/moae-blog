import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { useMutation, useQuery } from "react-query";

import { PostEditor, MarkdownPostHeader } from "@component/MarkdownRender";
import SubmitContainer from "@component/MarkdownRender/SubmitContainer";
import { Loader } from "@component/Common/Loader";
import deviceAtom from "@recoil/deviceAtom";
import theme from "@styles/theme";
import * as APIS from "@core/apis";
import { useLogout } from "@hooks/index";
import { getToken, setAxiosAuthHeader, setToken } from "@utils/index";
import { API_KEYS } from "@constant/index";

const Write = () => {
  const device = useRecoilValue(deviceAtom);
  const { execute: logout } = useLogout();

  const { mutate } = useMutation(API_KEYS.USER.REFRESH, APIS.USER.refresh, {
    onSuccess(data, variables, context) {
      const { accessToken, refreshToken } = data.data;
      setToken({ accessToken, refreshToken });
    },
    onError(error, variables, context) {
      alert("로그인을 후에 이용할 수 있습니다.");
      logout();
    },
  });

  const { isLoading } = useQuery(API_KEYS.USER.CHECK, APIS.USER.checkAuth, {
    retry: false,
    onError(err) {
      const token = getToken();
      if (token?.refreshToken) {
        setAxiosAuthHeader(token.refreshToken);
        mutate();
      } else {
        alert("로그인을 후에 이용할 수 있습니다.");
        logout();
      }
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
