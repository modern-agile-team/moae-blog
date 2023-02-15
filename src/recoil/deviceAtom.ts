import { atom } from "recoil";

const deviceAtom = atom<"mobile" | "tablet" | "laptop" | "desktop">({
  key: "deviceAtom",
  default: "desktop",
});

export default deviceAtom;
