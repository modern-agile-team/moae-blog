import styled from "styled-components";
import theme from "@styles/theme";
import { IoMdArrowBack } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";

const SearchSection = () => {
  const router = useRouter();

  const closeSection = () => {
    router.back();
  };

  return (
    <Wrapper>
      <div className="input">
        <IoMdArrowBack onClick={closeSection} />
        <input placeholder="검색어를 입력하세요" />
        <GoSearch />
      </div>
    </Wrapper>
  );
};

export default SearchSection;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 9999999;
  background-color: ${theme.COLORS.BG1};
  .input {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    background-color: #eaeaea;
    padding: 1rem 0.5rem;
    input {
      width: 70%;
      padding: 10px;
      background-color: #eaeaea;
      border: none;
      border-bottom: 1px solid;
    }
    svg {
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
