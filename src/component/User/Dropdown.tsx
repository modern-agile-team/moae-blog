import Link from "next/link";
import styled from "styled-components";

import theme from "@styles/theme";
import { useLogout } from "@hooks/index";

const Dropdown = () => {
  const { execute: logout } = useLogout();

  return (
    <Wrapper>
      <ul>
        <Link href="/soonki">
          <li>내 글</li>
        </Link>
        <Link href="/write">
          <li>글 작성</li>
        </Link>
        <Link href="/.">
          <li onClick={logout}>로그아웃</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  z-index: 9999;
  background-color: ${theme.COLORS.BG1};
  box-shadow: 0 3px 3px #e6e6e6;
  cursor: default;
  li {
    margin: 10px 0;
    padding: 1rem;
    background-color: ${theme.COLORS.BG1};
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  }
  @media (max-width: 568px) {
    padding: 0 1rem;
    left: -100%;
    transform: translateX(-55%);
  }
`;
