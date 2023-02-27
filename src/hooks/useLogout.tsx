import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

const useLogout = () => {
  const session = useSession();
  const router = useRouter();

  const execute = () => {
    destroyCookie(null, "accessToken");
    destroyCookie(null, "refreshToken");
    if (session.status === "authenticated") {
      signOut({ redirect: false });
    }
    router.push("/");
  };

  return { execute };
};

export default useLogout;
