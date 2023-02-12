import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import withPostWriting from "@recoil/postWriting/withPostWriting";
import theme from "@styles/theme";
import { useMutation } from "react-query";
import * as APIS from "@core/apis";
import { API_KEYS } from "@constant/index";

const SubmitContainer = () => {
  const post = useRecoilValue(withPostWriting);
  const router = useRouter();

  const { mutate, data } = useMutation(API_KEYS.BOARDS.CREATE, APIS.BOARDS.create, {
    onError(error, variables, context) {
      console.error("::::", error);
      router.push("/");
    },
    onSuccess(data, variables, context) {
      router.push("/");
    },
  });

  const handleSubmit = () => {
    mutate(post);
  };

  const moveToBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <button id="submit" type="button" onClick={handleSubmit}>
        제출하기
      </button>
      <button onClick={moveToBack} id="goback" type="button">
        돌아가기
      </button>
    </Wrapper>
  );
};
export default SubmitContainer;

const Wrapper = styled.div`
  button {
    padding: 6px 15px;
    border-radius: 6px;
    border: none;
    font-size: ${theme.FONT.HEAD5.fontSize};
    font-weight: bold;
    cursor: pointer;
  }
  #submit {
    background-color: ${theme.COLORS.MAIN};
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  }
  #goback {
    margin-left: 2rem;
    background-color: ${theme.COLORS.BG1};
    color: ${theme.COLORS.MAIN};
    &:hover {
      filter: brightness(90%);
    }
  }
  @media (max-width: 568px) {
    display: flex;
    margin: 1rem 0;
  }
`;
