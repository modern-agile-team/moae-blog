import { signIn, useSession } from "next-auth/react";
import { AxiosError, AxiosResponse } from "axios";

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
    onSuccess(response: AxiosResponse<{ accessToken: string; refreshToken: string }>, variables, context) {
      const { data } = response;
      console.log(":::::::success", response);
      sessionStorage.setItem("accessToken", data.accessToken);
      sessionStorage.setItem("refreshToken", data.refreshToken);
    },
    onError(error: AxiosError, variables, context) {
      console.error(error.response?.data, variables, context);
    },
  });

  console.log("::::::token", sessionStorage.getItem("accessToken"), sessionStorage.getItem("refreshToken"));

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
