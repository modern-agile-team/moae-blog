import { atom } from "recoil";
import { IPostWritingType } from "./type";

const postWriting = atom<IPostWritingType>({
  key: "postWriting",
  default: {
    title: "",
    categories: [],
    context: "## 글을 작성해 보세요",
  },
});

export default postWriting;
