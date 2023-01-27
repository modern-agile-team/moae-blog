import { signIn } from "next-auth/react";

import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  return (
    <SectionWrapper>
      <button className="login-btn" onClick={() => signIn()}>
        로그인
      </button>
    </SectionWrapper>
  );
};

export default LoginSection;
