import { atom } from "recoil";

const deviceAtom = atom<"mobile" | "desktop">({
  key: "deviceAtom",
  default: "desktop",
});

export default deviceAtom;
