import * as ModalList from "@component/Modal/ModalList";

export type ModalName = keyof typeof ModalList;
export type ModalType = { name: ModalName; props?: any };
export interface ModalProps {
  name: ModalName;
  onHide: () => void;
  [props: string]: any;
}
