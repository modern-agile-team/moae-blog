import { signIn } from "next-auth/react";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  return (
    <SectionWrapper>
      <button className="login-btn">
        <Link href="/signup">회원가입</Link>
      </button>
      <button className="login-btn">
        <Link href="/login">로그인</Link>
      </button>
    </SectionWrapper>
  );
};

export default LoginSection;
