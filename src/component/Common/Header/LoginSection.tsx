import { login } from "@core/apis";
import { AxiosError, AxiosResponse } from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import SectionWrapper from "./SectionWrapper";

const LoginSection = () => {
  const { data, status } = useSession();

  const { mutate } = useMutation(login, {
    onSuccess(response: AxiosResponse<{ accessToken: string; refreshToken: string }>, variables, context) {
      const { data } = response;
      sessionStorage.setItem("accessToken", data.accessToken);
      sessionStorage.setItem("refreshToken", data.refreshToken);
    },
    onError(error: AxiosError, variables, context) {
      console.error(error.response?.data, variables, context);
    },
  });

  useEffect(() => {
    if (status === "authenticated") {
      const { email, name, image: baseUrl } = data.user!;
      mutate({ email: `${email}`, name: `${name}`, baseUrl: `${baseUrl}` });
    }
  }, [data, status]);

  return (
    <SectionWrapper>
      <button className="login-btn" onClick={() => signIn()}>
        로그인
      </button>
    </SectionWrapper>
  );
};

export default LoginSection;
