import { signIn } from "next-auth/react";
import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  const clickToLogin = () => {
    signIn("google");
  };

  return (
    <SectionWrapper>
      <button className="login-btn" onClick={clickToLogin}>
        로그인
      </button>
    </SectionWrapper>
  );
};

export default LoginSection;
