import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

import theme from "@styles/theme";
import Comment from "./Comment";
import { CommentListType } from "@type/comment";
import { API_KEYS } from "@constant/index";
import { COMMENT } from "@core/apis";

const CommentSection = ({ commentList }: CommentListType) => {
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState("");

  const onKeyUp = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    const height = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = `${height + 8}px`;
  };

  const { mutate: createComment } = useMutation(API_KEYS.COMMENT.CREATE, COMMENT.createComment, {
    onSuccess(data, variables, context) {
      console.log(":::::", data);
    },
    onError(error, variables, context) {
      console.error("::::: failed to create comment", error);
    },
  });

  const handleCreateComment = () => {
    if (comment === "" || comment.length > 500) {
      alert("댓글 내용을 입력해 주세요. 길이 최소 1 ~ 최대 500");
      return;
    }
    createComment({ postId: `${router.query.post}`, context: comment });
    setComment("");
  };

  return (
    <Wrapper>
      <h3>{commentList.length === 0 ? "작성된 댓글이 없습니다." : `${commentList.length}개의 댓글`}</h3>
      <div className="comment-container">
        <textarea
          ref={textareaRef}
          placeholder={commentList.length === 0 ? "첫번째 댓글을 작성해보세요" : "댓글을 입력하세요"}
          onKeyUp={onKeyUp}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button id="comment-btn" onClick={handleCreateComment}>
          댓글 입력
        </button>
      </div>
      <ul>
        {commentList.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default CommentSection;

const Wrapper = styled.div`
  margin: 4rem 0;
  textarea {
    width: 100%;
    padding: 1rem;
    min-height: 4rem;
    border: 1px solid #eaeaea;
    border-radius: 6px;
  }
  ul {
    margin-top: 1rem;
  }
  .comment-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    textarea {
      height: auto;
      resize: none;
      min-height: 70px;
    }
  }
  #comment-btn {
    margin-top: 1rem;
    border: none;
    padding: 6px 15px;
    border-radius: 6px;
    font-size: 15px;
    color: #fff;
    background-color: ${theme.COLORS.MAIN};
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  @media (max-width: 568px) {
    padding: 0;
    h3 {
      font-size: ${theme.FONT.HEAD5.fontSize};
    }
    .comment-container {
      font-size: ${theme.FONT.NORMAL.fontSize};
    }
  }
`;
