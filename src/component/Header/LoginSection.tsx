import { signIn } from "next-auth/react";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  const clickToLogin = () => {
    signIn("google");
  };

  return (
    <SectionWrapper>
      <button className="login-btn">
        <Link href="/signup">회원가입</Link>
      </button>
      <button className="login-btn" onClick={clickToLogin}>
        로그인
      </button>
    </SectionWrapper>
  );
};

export default LoginSection;
