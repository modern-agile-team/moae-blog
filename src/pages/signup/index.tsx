import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextInput } from "@component/Common";

type SignUpType = {
  username: string;
  password: string;
  password2: string;
  email: string;
};

const SignUp = () => {
  const [inputStatus, setInputStatus] = useState<SignUpType>({
    username: "",
    password: "",
    password2: "",
    email: "",
  });
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputStatus({ ...inputStatus, [id]: value });
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const data = { ...inputStatus };
      await axios({
        url: "https://myboard-backend.herokuapp.com/users/register/",
        method: "POST",
        data,
      });
      router.push("/");
    } catch (err: any) {
      if (err.response.status === 400) {
        alert("이메일 중복");
      }
    }
  };

  return (
    <InputWrap>
      <TextInput id="username" type="text" placeholder="ID" onChange={onChange} />
      <TextInput id="password" type="password" placeholder="Password" onChange={onChange} />
      <TextInput id="password2" type="password" placeholder="Confirm Password" onChange={onChange} />
      <TextInput id="email" type="email" placeholder="Email" onChange={onChange} />
      <SignUpButton type="button" onClick={onSubmit} placeholder="회원가입" />
    </InputWrap>
  );
};

export default SignUp;

const InputWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50vw;
  max-width: 600px;
`;

const SignUpButton = styled(Button)`
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
