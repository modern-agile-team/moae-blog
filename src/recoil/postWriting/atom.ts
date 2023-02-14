import { POST } from "@core/types/index";
import { atom } from "recoil";

const postWriting = atom<POST.CreatePostType>({
  key: "postWriting",
  default: {
    title: "",
    categories: [],
    context: "## 글을 작성해 보세요",
  },
});

export default postWriting;
