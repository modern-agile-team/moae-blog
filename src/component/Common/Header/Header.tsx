import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import theme from "@styles/theme";
import React, { useMemo } from "react";
import LoginSection from "./LoginSection";
import TitleSection from "./TitleSection";
import { useRouter } from "next/router";
import UserSection from "./UserSection";
import { useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  const router = useRouter();

  const toggleIsSearchBarOpen = () => {
    router.push("/searching");
  };

  return (
    <Wrapper>
      <TitleSection />
      <section>
        <button id="search-btn" onClick={toggleIsSearchBarOpen}>
          <GoSearch size={20} />
        </button>
        {session.status === "authenticated" ? <UserSection /> : <LoginSection />}
      </section>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 6rem;
  background-color: ${theme.COLORS.BG1};
  section {
    display: flex;
    button {
      display: flex;
      align-items: center;
      margin: 0 10px;
      padding: 7px 18px;
      border: none;
      cursor: pointer;
    }
  }
  .login-btn {
    border: 1px solid;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: ${theme.COLORS.MAIN};
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }
  }
  #search-btn {
    border-radius: 50%;
    background: none;
    padding: 10px;
    transition: 0.3s;
    &:hover {
      background-color: #eeeeee;
    }
  }
  @media (max-width: 568px) {
    padding: 0 1rem;
    #write-btn {
      display: none;
    }
    .login-btn {
      font-size: ${theme.FONT.SMALL.fontSize};
    }
    section {
      button {
        margin: 0;
      }
    }
  }
`;
