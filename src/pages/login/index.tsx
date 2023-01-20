import { AxiosError } from "axios";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Button } from "@component/Common";
import { login } from "@core/apis";
import { useMutation } from "react-query";

const Login = () => {
  const router = useRouter();

  const { mutate } = useMutation(login, {
    onSuccess: async (res) => {
      const token = await res.user.getIdToken();
      localStorage.setItem("token", token);
      router.push("/");
    },
    onError: async (err: AxiosError<{ message: string }>) => {
      alert(err.response?.data.message);
    },
  });

  return (
    <div>
      <LoginButton onClick={() => mutate()}>구글로 로그인</LoginButton>
    </div>
  );
};

export default Login;

const LoginButton = styled(Button)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    animation: hover 2s infinite;
  }
  @keyframes hover {
    0% {
      background-color: rgb(60, 47, 37);
    }
    50% {
      background-color: rgb(92, 72, 56);
    }
    100% {
      background-color: rgb(60, 47, 37);
    }
  }
`;
