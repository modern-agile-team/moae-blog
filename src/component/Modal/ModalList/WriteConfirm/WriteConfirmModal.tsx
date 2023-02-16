import { useMutation } from "react-query";
import { useRouter } from "next/router";

import { API_KEYS } from "@core/constant";
import { ModalProps } from "@core/types/modal";
import * as APIS from "@core/apis";

const WriteConfirmModal = (props: ModalProps) => {
  const { onHide, post } = props;
  const router = useRouter();
  const regex = /\!\[.*\]\((.*?)\)/g;
  const imageList = post.context.match(regex) || [""];

  const { mutate, data } = useMutation(API_KEYS.BOARDS.CREATE, APIS.BOARDS.create, {
    onError(error, variables, context) {
      if (variables.title === "") {
        alert("제목을 입력하세요.");
      } else {
        alert("에러");
        console.error("Error occurred while create post ===> \n", error);
      }
    },
    onSuccess() {
      router.push("/");
    },
  });

  console.log(":::::", imageList);

  return (
    <div>
      <button onClick={onHide}>닫기</button>
    </div>
  );
};

export default WriteConfirmModal;
