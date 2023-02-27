import { useSetRecoilState } from "recoil";

import modalList from "@recoil/modalList";
import { ModalName, ModalType } from "@core/types/modal";

const useModal = () => {
  const setModalList = useSetRecoilState(modalList);

  const showModal = (modalName: ModalName, props?: any) => {
    setModalList((prev) => (prev.length > 1 ? [...prev, { name: modalName, props }] : [{ name: modalName, props }]));
  };

  const resetModal = () => {
    setModalList([]);
  };

  const hideModal = (modalName: ModalName) => {
    setModalList((prev) => [...prev].filter((modal) => modal.name !== modalName));
  };

  return { showModal, resetModal, hideModal };
};

export default useModal;
