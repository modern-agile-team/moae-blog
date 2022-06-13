export interface UserType {
  id: string;
  name: string;
  img: string;
  email: string;
}

export interface IUserList {
  [id: string]: UserType;
}
