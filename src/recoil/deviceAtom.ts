import { atom } from "recoil";

const deviceAtom = atom<"mobile" | "desktop" | "tablet">({
  key: "deviceAtom",
  default: "desktop",
});

export default deviceAtom;
