import { atom } from "recoil";

const postWriting = atom({
  key: "postWriting",
  default: {
    title: "",
    tags: [],
    description: "## 글을 작성해 보세요",
  },
});

export default postWriting;
