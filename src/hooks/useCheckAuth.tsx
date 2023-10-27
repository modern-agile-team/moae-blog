import { useQuery } from "react-query";

import { API_KEYS } from "@core/constant";
import * as APIS from "@core/apis";
import { getToken, setAxiosAuthHeader } from "@core/utils";

const useCheckAuth = (onError?: () => void) => {
  const existenceApiResult = useQuery(API_KEYS.USER.CHECK, APIS.USER.checkAuth, {
    retry: false,
    onError() {
      const { accessToken } = getToken();
      if (accessToken) {
        setAxiosAuthHeader(accessToken);
      } else {
        onError && onError();
      }
    },
  });

  return existenceApiResult;
};

export default useCheckAuth;
