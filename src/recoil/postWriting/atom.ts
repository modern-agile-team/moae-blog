import { POST } from "@core/types/index";
import { atom } from "recoil";

const postWriting = atom<POST.CreatePostType>({
  key: "postWriting",
  default: {
    title: "",
    categories: [],
    context: "",
  },
});

export default postWriting;
