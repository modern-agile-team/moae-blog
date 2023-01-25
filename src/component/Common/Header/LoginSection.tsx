import { login } from "@core/apis";
import { AxiosError } from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  const { data, status } = useSession();

  const { mutate, isLoading } = useMutation(login, {
    onSuccess(data, variables, context) {
      console.log(":::::1mut", data);
    },
    onError(error: AxiosError, variables, context) {
      console.error(":::::error", error.response?.data, variables, context);
    },
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (status === "authenticated") {
      console.log(":::::", data.user);
      const { email, name, image: baseUrl } = data.user!;
      mutate({ email: email as string, name: name as string, baseUrl: baseUrl as string });
    }
  }, [data, status]);

  return (
    <SectionWrapper>
      <button className="login-btn" onClick={() => signIn()}>
        로그인
      </button>
      <button onClick={() => signOut()}>로그아웃</button>
    </SectionWrapper>
  );
};

export default LoginSection;
