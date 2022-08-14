import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@component/Button";
import { TextInput } from "@component/Input";

type LoginType = {
  username: string;
  password: string;
};

const Login = () => {
  const [inputStatus, setInputStatus] = useState<LoginType>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputStatus({ ...inputStatus, [id]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = { ...inputStatus };
      const result = await axios({
        url: "https://myboard-backend.herokuapp.com/users/login/",
        method: "POST",
        data,
      });
      const { token } = result.data;
      localStorage.setItem("token", token);
      router.push("/");
    } catch (err: any) {
      if (err.response.status === 400) {
        alert("이메일 중복");
      }
    }
  };

  return (
    <div>
      <InputWrap>
        <form onSubmit={onSubmit}>
          <TextInput id="username" type="text" placeholder="ID" onChange={onChange} />
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
