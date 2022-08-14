import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import theme from "@styles/theme";
import React, { useEffect, useState } from "react";
import LoginSection from "./LoginSection";
import TitleSection from "./TitleSection";
import { useRouter } from "next/router";
import UserSection from "./UserSection";
import getToken from "@utils/getToken";
interface Props {
  user?: string;
}

const Header = ({ user }: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const token = getToken();
  const router = useRouter();

  const toggleIsSearchBarOpen = () => {
    router.push("/searching");
  };

  useEffect(() => {
    token ? setIsLogin(true) : setIsLogin(false);
  }, [token]);

  return (
    <Wrapper>
      <TitleSection user={user} />
      <section>
        <button id="search-btn" onClick={toggleIsSearchBarOpen}>
          <GoSearch size={20} />
        </button>
        {isLogin ? <UserSection /> : <LoginSection />}
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
