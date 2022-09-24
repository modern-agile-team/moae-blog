import { SIGNUP_TYPE, SIGNIN_TYPE } from "./types/apis";

class HTTP_REQUEST {
  private _path = "";
  private _token = window.localStorage.getItem("token");

  constructor(path: string) {
    this._path = path;
  }

  /**
   * USER관련 API
   * @signUp - 회원가입
   * @signIn - 로그인
   */
  get USERS() {
    /**
     * 회원가입 API
     * @param param {@link SIGNUP_TYPE}
     */
    const signUp = (param: SIGNUP_TYPE) => {
      try {
        return this._instance()
          .POST("/signUp", param)
          .then((res) => console.log(res));
      } catch (err) {
        console.log(err);
      }
    };

    /**
     * 로그인 API
     * @param param {@link SIGNIN_TYPE}
     * @returns
     */
    const signIn = (param: SIGNIN_TYPE) => {
      try {
        return this._instance()
          .POST("/signIn", param)
          .then((res) => console.log(res));
      } catch (err) {
        console.log(err);
      }
    };

    return { signUp, signIn };
  }

  private _instance() {
    const GET = (path: string) => fetch(`${this._path}${path}`, { method: "GET" }).then((res) => res.json());

    const PUT = (path: string, param: any) =>
      fetch(`${this._path}${path}`, { method: "PUT", body: param }).then((res) => res.json());

    const POST = (path: string, param: any) =>
      fetch(`${this._path}${path}`, { method: "POST", body: param }).then((res) => res.json());

    const DELETE = (path: string) => fetch(`${this._path}${path}`, { method: "DELETE" }).then((res) => res.json());

    return { GET, PUT, POST, DELETE };
  }
}

/**
 * API 관련 클래스
 */
const APIS = new HTTP_REQUEST("");

export default APIS;
