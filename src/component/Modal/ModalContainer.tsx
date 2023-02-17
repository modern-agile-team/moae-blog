import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useRecoilValue } from "recoil";

import { default as modalState } from "@recoil/modalList";
import useModal from "@hooks/useModal";
import * as S from "./style";
import * as Modal from "./ModalList";

const ModalContainer = () => {
  const modalList = useRecoilValue(modalState);
  const { hideModal } = useModal();

  useEffect(() => {
    document.body.style.overflow = modalList.length === 0 ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = modalList.length === 0 ? "auto" : "hidden";
    };
  }, [modalList]);

  if (modalList.length === 0) return null;

  return createPortal(
    <S.Wrapper id="modal">
      {modalList.map((modalItem) => {
        const Component = Modal[modalItem.name];
        return (
          <S.ModalLayout key={modalItem.name}>
            <Component name={modalItem.name} onHide={() => hideModal(modalItem.name)} {...modalItem.props} />
          </S.ModalLayout>
        );
      })}
    </S.Wrapper>,
    document.body
  );
};

export default ModalContainer;
