import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../../component/TopBar/TopBar";

type SignUpType = {
  username: string;
  password: string;
  password2: string;
  email: string;
};

const SignUp = () => {
  const categories = [
    {
      id: "1283078as",
      name: "Front-End",
      link: "/categori/frontend",
    },
    {
      id: "1237uyxzc",
      name: "Back-End",
      link: "/categori/backend",
    },
    {
      id: "123213uyxzc",
      name: "Design",
      link: "/categori/design",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "/categori/computerscience",
    },
  ];

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
      <TopBar categories={categories} />
      <InputWrap>
        <input id="username" type="text" placeholder="username" onChange={onChange} />
        <input id="password" type="password" placeholder="password" onChange={onChange} />
        <input id="password2" type="password" placeholder="password-check" onChange={onChange} />
        <input id="email" type="email" placeholder="email" onChange={onChange} />
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

  input {
    width: 100%;
    margin: 15px 0;
    border-radius: 6px;
    padding: 6px 10px;
  }
`;
