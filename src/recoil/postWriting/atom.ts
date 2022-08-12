import { atom } from "recoil";

interface IPostWritingType {
  title: string;
  tags: string[];
  description: string;
}

const postWriting = atom<IPostWritingType>({
  key: "postWriting",
  default: {
    title: "",
    tags: [],
    description: "## 글을 작성해 보세요",
  },
});

export default postWriting;
