export interface UserType {
  authCode: number;
  id: number;
  baseUrl: string;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
}

export interface IUserList {
  [id: string]: UserType;
}
