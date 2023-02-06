import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useLogout = () => {
  const session = useSession();
  const router = useRouter();

  const execute = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    if (session.status === "authenticated") {
      signOut({ redirect: false });
    }
    router.push("/");
  };

  return { execute };
};

export default useLogout;
