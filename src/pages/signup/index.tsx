import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../component/Input";

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

  const onSubmit = async () => {
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
    <div>
      <InputWrap>
        <TextInput id="username" type="text" placeholder="ID" onChange={onChange} />
        <TextInput id="password" type="password" placeholder="Password" onChange={onChange} />
        <TextInput id="password2" type="password" placeholder="Confirm Password" onChange={onChange} />
        <TextInput id="email" type="email" placeholder="Email" onChange={onChange} />
        <button type="button" onClick={onSubmit}>
          회원가입
        </button>
      </InputWrap>
    </div>
  );
};

export default SignUp;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
`;
