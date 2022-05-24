import { useRecoilValue } from "recoil";
import styled from "styled-components";
import deviceAtom from "../../recoil/deviceAtom";
import theme from "../../styles/theme";
import SubmitContainer from "./SubmitContainer";

const PostHeader = () => {
  const device = useRecoilValue(deviceAtom);

  return (
    <Wrapper>
      <InputContainer>
        <input id="title" placeholder="제목을 입력하세요" />
        <hr />
        <input id="tags" placeholder="태그를 작성하세요" />
      </InputContainer>
      {device !== "mobile" && <SubmitContainer />}
    </Wrapper>
  );
};

export default PostHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 6rem;
  @media (max-width: 568px) {
    padding: 1rem 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background: ${theme.COLORS.BG1};
  }
  #title {
    font-size: ${theme.FONT.HEAD1.fontSize};
    font-weight: ${theme.FONT.HEAD1.fontWeight};
    margin-bottom: 2rem;
    color: ${theme.COLORS.MAINDARK};
  }
  #tags {
    font-size: ${theme.FONT.HEAD4};
    max-width: 50%;
    color: #333333;
  }
  position: relative;
  hr {
    color: ${theme.COLORS.MAIN};
    background-color: ${theme.COLORS.MAIN};
    width: 15%;
    position: absolute;
    bottom: 30%;
    height: 5px;
    border: none;
  }
  @media (max-width: 568px) {
    width: 100%;
    #title {
      font-size: ${theme.FONT.HEAD3.fontSize};
    }
    #tags {
      font-size: ${theme.FONT.HEAD6.fontSize};
    }
  }
`;
