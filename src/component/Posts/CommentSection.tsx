import React, { useRef } from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { CommentListType } from "src/types/comment";
import Comment from "./Comment";

const CommentSection = ({ commentList }: CommentListType) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onKeyUp = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    const height = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = `${height + 8}px`;
  };

  return (
    <Wrapper>
      <h3>{`${commentList.length}개의 댓글`}</h3>
      <div className="comment-container">
        <textarea ref={textareaRef} placeholder="댓글을 입력하세요" onKeyUp={onKeyUp} />
        <button id="comment-btn">댓글 입력</button>
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
