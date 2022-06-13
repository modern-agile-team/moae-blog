import { atom } from "recoil";
import { IUserList } from "../types/user";

const userListAtom = atom<IUserList>({
  key: "userListAtom",
  default: {
    aaaa: {
      id: "aaaa",
      email: "alstnsrl98@gmail.com",
      img: "asdkj",
      name: "민순기",
    },
    bbbb: {
      id: "bbbb",
      email: "alstnsrl97@gmail.com",
      img: "asdkj",
      name: "민순기",
    },
    cccc: {
      id: "cccc",
      email: "alstnsrl96@gmail.com",
      img: "asdkj",
      name: "민순기",
    },
    dddd: {
      id: "dddd",
      email: "tnsrl96@gmail.com",
      img: "asdkj",
      name: "민순기",
    },
  },
});

export default userListAtom;
