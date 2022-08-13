import { selector } from "recoil";
import postWriting from "./atom";
import { IPostWritingType } from "./type";

const withPostWriting = selector<IPostWritingType>({
  key: "withPostWriting",
  get: ({ get }) => get(postWriting),
  set: ({ set }, newValue) => set(postWriting, newValue),
});

export default withPostWriting;
