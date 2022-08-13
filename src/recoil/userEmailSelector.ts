import { selector } from "recoil";
import userListAtom from "./userListAtom";

const userEmailSelector = selector<string[]>({
  key: "userEmailSelector",
  get: ({ get }) => {
    const userList = get(userListAtom);
    return Object.values(userList).map((user) => user.email);
  },
});

export default userEmailSelector;
