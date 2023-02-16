import { useSetRecoilState } from "recoil";

import modalList from "@recoil/modalList";
import { ModalType } from "@core/types/modal";

const useModal = () => {
  const setModalList = useSetRecoilState(modalList);

  const showModal = (modalName: ModalType) => {
    setModalList((prev) => (prev.length > 1 ? [...prev, modalName] : [modalName]));
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
