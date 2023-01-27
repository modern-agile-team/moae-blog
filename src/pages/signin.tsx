import { signIn } from "next-auth/react";

import * as Layout from "@component/Layout";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Layout.Login>
      <LoginButton onClick={() => signIn("google")}>구글로 로그인하기</LoginButton>
    </Layout.Login>
  );
};

export default SignIn;

const LoginButton = styled.button`
  padding: 4px 7px;
`;
