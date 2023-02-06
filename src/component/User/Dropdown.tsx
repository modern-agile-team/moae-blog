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
  cursor: default;
  li {
    padding: 25px 18px;
    color: ${theme.COLORS.BG1};
    background-color: ${theme.COLORS.MAIN_BRIGHT};
    border: 1px solid ${theme.COLORS.MAIN_BRIGHT};
    cursor: pointer;
    &:nth-child(1) {
      border-radius: 6px 6px 0 0;
    }
    &:nth-last-child(1) {
      border-radius: 0 0 6px 6px;
    }
    &:hover {
      color: ${theme.COLORS.MAIN};
      background-color: ${theme.COLORS.BG1};
    }
  }
  @media (max-width: 568px) {
    padding: 0 1rem;
    left: -100%;
    transform: translateX(-55%);
  }
`;
