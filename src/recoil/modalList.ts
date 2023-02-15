import { atom } from "recoil";

import ModalType from "@core/types/modal";

const modalList = atom<ModalType[]>({
  key: "modalListAtom",
  default: [],
});

export default modalList;
