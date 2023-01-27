import { signIn, useSession } from "next-auth/react";

import * as Layout from "@component/Layout";
import styled from "styled-components";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { login } from "@core/apis";
import CONST from "@constant/index";

const SignIn = () => {
  const { data, status } = useSession();

  console.log("::::", data, status);

  const { mutate } = useMutation(login, {
    onSuccess(data, variables, context) {
      console.log(":::::", data);
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });

  useEffect(() => {
    if (status === CONST.SESSION_STATUS.AUTHENTICATED) {
      if (!data.user) return;
      const { email, name, image } = data.user;

      mutate({ email: email!, name: name!, baseUrl: image! });
    }
  }, [status]);

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
