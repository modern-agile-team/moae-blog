/**
 * @type {email} 가입 이메일
 * @type {password} 비밀번호
 * @type {name} 이름
 */
export interface SIGNUP_TYPE extends SIGNIN_TYPE {
  name: string;
}

export type SIGNIN_TYPE = {
  email: string;
  password: string;
};
