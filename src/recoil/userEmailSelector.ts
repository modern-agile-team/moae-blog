import { selector } from "recoil";
import userListAtom from "./userListAtom";

const userEmailSelector = selector({
  key: "userEmailSelector",
  get: ({ get }) => {
    const userList = get(userListAtom);
    return Object.values(userList).map((user) => user.email);
  },
  set: ({ set }, newValue) => {
    set(userListAtom, () => {
      return [newValue];
    });
  },
});

export default userEmailSelector;
