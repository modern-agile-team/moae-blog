import * as ModalList from "@component/Modal/ModalList";

export type ModalType = keyof typeof ModalList;
export interface ModalProps {
  name: ModalType;
  onHide: () => void;
}
