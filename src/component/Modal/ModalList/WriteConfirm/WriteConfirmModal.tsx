import { ModalProps } from "@core/types/modal";

const WriteConfirmModal = (props: ModalProps) => {
  const { onHide } = props;

  return (
    <div>
      <button onClick={onHide}>닫기</button>
    </div>
  );
};

export default WriteConfirmModal;
