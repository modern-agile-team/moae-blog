import { useRouter } from "next/router";
import styled from "styled-components";
import theme from "@styles/theme";
import useModal from "@hooks/useModal";

const SubmitContainer = () => {
  const router = useRouter();
  const { showModal } = useModal();

  const handleSubmit = () => {
    showModal("WriteConfirm");
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
  width: fit-content;
  height: fit-content;
  button {
    width: 100px;
    height: 36px;
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
    background-color: ${theme.COLORS.BG1};
    color: ${theme.COLORS.MAIN};
    &:hover {
      filter: brightness(90%);
    }
  }
  @media (max-width: 568px) {
    margin: 1rem 0;
  }
`;
