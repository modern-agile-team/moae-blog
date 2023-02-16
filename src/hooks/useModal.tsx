import { useSetRecoilState } from "recoil";

import modalList from "@recoil/modalList";
import { ModalType } from "@core/types/modal";

const useModal = () => {
  const setModalList = useSetRecoilState(modalList);

  const showModal = (modalName: ModalType) => {
    setModalList((prev) => {
      if (prev.length > 1) {
        return [...prev, modalName];
      } else {
        return [modalName];
      }
    });
  };

  const resetModal = () => {
    setModalList([]);
  };

  const hideModal = (modalName: ModalType) => {
    setModalList((prev) => [...prev].filter((modal) => modal !== modalName));
  };

  return { showModal, resetModal, hideModal };
};

export default useModal;
