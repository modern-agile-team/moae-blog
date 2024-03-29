import { signIn, useSession } from "next-auth/react";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { useMutation } from "react-query";

import * as Layout from "@component/Layout";
import { API_KEYS, SESSION_STATUS } from "@core/constant";
import { setAxiosAuthHeader, setToken } from "@core/utils/index";
import * as APIS from "@core/apis";

const SignIn = () => {
  const { data, status } = useSession();
  const router = useRouter();

  const { mutate } = useMutation(API_KEYS.USER.SIGN_IN, APIS.USER.login, {
    onSuccess(response: AxiosResponse<{ accessToken: string; refreshToken: string }>, variables, context) {
      const { data } = response;
      setToken(data);
      setAxiosAuthHeader(data.accessToken);
      router.push("/");
    },
  });

  useEffect(() => {
    if (status === SESSION_STATUS.AUTHENTICATED) {
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
