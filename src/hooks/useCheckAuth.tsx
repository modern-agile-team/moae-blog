import { useMutation, useQuery } from "react-query";

import { API_KEYS } from "@core/constant";
import { useLogout } from "@hooks/index";
import * as APIS from "@core/apis";
import { getToken, setAxiosAuthHeader, setToken } from "@core/utils";

const useCheckAuth = (onError?: () => void) => {
  const { execute: logout } = useLogout();

  const { mutate } = useMutation(API_KEYS.USER.REFRESH, APIS.USER.refresh, {
    onSuccess(data) {
      const { accessToken, refreshToken } = data.data;
      setToken({ accessToken, refreshToken });
      setAxiosAuthHeader(refreshToken);
    },
    onError() {
      onError && onError();
      logout();
    },
  });

  const existenceApiResult = useQuery(API_KEYS.USER.CHECK, APIS.USER.checkAuth, {
    retry: false,
    onError() {
      const token = getToken();
      if (token?.refreshToken) {
        setAxiosAuthHeader(token.refreshToken);
        mutate();
      } else {
        onError && onError();
      }
    },
  });

  return existenceApiResult;
};

export default useCheckAuth;
