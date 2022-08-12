import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

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
          <input id="username" type="text" placeholder="username" onChange={onChange} />
          <input id="password" type="password" placeholder="password" onChange={onChange} />
          <button type="submit">로그인</button>
        </form>
      </InputWrap>
    </div>
  );
};

export default Login;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;

  input {
    width: 100%;
    margin: 15px 0;
    border-radius: 6px;
    padding: 6px 10px;
  }
`;
