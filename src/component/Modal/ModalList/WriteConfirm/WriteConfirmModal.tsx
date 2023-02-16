import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { useMemo, useState } from "react";

import { API_KEYS } from "@core/constant";
import { ModalProps } from "@core/types/modal";
import * as APIS from "@core/apis";
import withPostWriting from "@recoil/postWriting/withPostWriting";
import * as S from "./style";
import { Carousel } from "@component/Common";

const WriteConfirmModal = (props: ModalProps) => {
  const { onHide } = props;

  const [thumbnail, setThumbnail] = useState("");
  const post = useRecoilValue(withPostWriting);
  const router = useRouter();

  const imageList = useMemo(() => {
    const regex = new RegExp(/\!\[.*\]\((.*?)\)/, "g");
    return (
      post.context.match(regex)?.map((image) => {
        const _regex = new RegExp(/\!\[.*\]\((.*?)\)/, "g");
        const result = _regex.exec(image);
        return result ? result[1] : "";
      }) || null
    );
  }, []);

  const { mutate } = useMutation(API_KEYS.BOARDS.CREATE, APIS.BOARDS.create, {
    onError(error, variables, context) {
      if (variables.title === "") {
        alert("제목을 입력하세요.");
      } else {
        alert("에러");
        console.error("Error occurred while create post ===> \n", error);
      }
    },
    onSuccess() {
      onHide();
      router.push("/");
    },
  });

  return (
    <S.Layout>
      <S.Header>
        <S.CloseButton onClick={onHide}>
          <AiOutlineClose />
        </S.CloseButton>
      </S.Header>
      <S.Body>
        <h1>썸네일을 고르세요</h1>
        <Carousel
          getCurrentItem={(item) => {
            try {
              setThumbnail(item.props.src || "");
            } catch (err) {
              console.error(err);
              setThumbnail("");
            }
          }}
        >
          {imageList && imageList.map((image) => <S.ThumbnailImage src={image} />)}
        </Carousel>
      </S.Body>
      <S.Footer>
        <button
          onClick={() => {
            mutate({ ...post, thumbnail });
          }}
        >
          제출
        </button>
      </S.Footer>
    </S.Layout>
  );
};

export default WriteConfirmModal;
