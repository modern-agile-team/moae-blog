import { selector } from "recoil";
import postWriting from "./atom";

const withPostWriting = selector({
  key: "withPostWriting",
  get: ({ get }) => get(postWriting),
  set: ({ set }, newValue) => set(postWriting, newValue),
});

export default withPostWriting;
