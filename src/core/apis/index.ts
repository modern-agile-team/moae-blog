import instance from "./instance";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fbAuth } from "../../../firebaseConfig";

export const login = async () => {
  const provider = new GoogleAuthProvider(); // provider를 구글로 설정
  return await signInWithPopup(fbAuth, provider);
};
