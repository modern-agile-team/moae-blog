import { PostType } from "@type/post";
import { atom } from "recoil";

const postWriting = atom<Pick<PostType, "title" | "categories" | "context">>({
  key: "postWriting",
  default: {
    title: "",
    categories: [],
    context: "## 글을 작성해 보세요",
  },
});

export default postWriting;
