import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";

import { default as modalState } from "@recoil/modalList";
import * as S from "./style";
import * as Modal from "./ModalList";
import useModal from "@hooks/useModal";

const ModalContainer = () => {
  const modalList = useRecoilValue(modalState);
  const { hideModal } = useModal();

  useEffect(() => {
    if (modalList.length === 0) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (modalList.length === 0) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
    };
  }, [modalList]);

  if (modalList.length === 0) return null;

  return createPortal(
    <S.Wrapper id="modal">
      {modalList.map((modalName) => {
        const Component = Modal[modalName];
        return (
          <>
            <button onClick={() => hideModal(modalName)}>닫기</button>
            <Component />
          </>
        );
      })}
    </S.Wrapper>,
    document.body
  );
};

export default ModalContainer;
