import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextInput } from "@component/Common";
import { login } from "@core/apis";
import { useMutation } from "react-query";

type LoginType = {
  email: string;
  password: string;
};

const Login = () => {
  const [inputStatus, setInputStatus] = useState<LoginType>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputStatus({ ...inputStatus, [id]: value });
  };

  const { mutate } = useMutation(login, {
    onSuccess: async (res) => {
      const { token } = res.data;
      localStorage.setItem("token", token);
      router.push("/");
    },
    onError: async (err: AxiosError<{ message: string }>) => {
      alert(err.response?.data.message);
    },
  });

  return (
    <div>
      <InputWrap>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mutate(inputStatus);
          }}
        >
          <TextInput id="email" type="text" placeholder="ID" onChange={onChange} />
          <TextInput id="password" type="password" placeholder="Password" onChange={onChange} />
          <LoginButton type="submit" placeholder="로그인" />
        </form>
      </InputWrap>
    </div>
  );
};

export default Login;

const InputWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50vw;
  max-width: 600px;
`;

const LoginButton = styled(Button)`
  position: absolute;
  width: 30%;
  top: 100%;
  right: 0;
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
