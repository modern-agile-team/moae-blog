import { PostType } from "@type/post";
import { selector } from "recoil";
import postWriting from "./atom";

const withPostWriting = selector<Pick<PostType, "title" | "categories" | "context">>({
  key: "withPostWriting",
  get: ({ get }) => get(postWriting),
  set: ({ set }, newValue) => set(postWriting, newValue),
});

export default withPostWriting;
