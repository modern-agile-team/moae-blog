import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import deviceAtom from "@recoil/deviceAtom";
import withPostWriting from "@recoil/postWriting/withPostWriting";
import theme from "@styles/theme";
import SubmitContainer from "./SubmitContainer";
import * as T from "@core/types/index";

const PostHeader = () => {
  const device = useRecoilValue(deviceAtom);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [post, setPost] = useRecoilState<T.POST.CreatePostType>(withPostWriting);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...(post as T.POST.CreatePostType),
      title: e.target.value,
    });
  };

  const handleChangeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);
  };

  const handleKeyDownTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (currentTag === "" && e.code === "Backspace") {
      const { categories } = post;
      const newTags = [...categories];
      newTags.pop();
      setPost({ ...post, categories: newTags });
    }
    if (e.code === "Enter" && e.nativeEvent.isComposing === false) {
      const { categories } = post;
      const newTags = [...categories];
      newTags.push(currentTag);
      setPost({
        ...(post as T.POST.CreatePostType),
        categories: newTags,
      });
      setCurrentTag("");
    }
  };
  return (
    <Wrapper>
      <InputContainer>
        <input id="title" placeholder="제목을 입력하세요" onChange={handleChangeTitle} />
        <hr />
        <TagsArea>
          {post.categories.map((category, index) => (
            <p key={index}>{category}</p>
          ))}
          <input
            id="tags"
            placeholder="태그를 작성하세요"
            value={currentTag || ""}
            onKeyDown={handleKeyDownTag}
            onChange={handleChangeTags}
          />
        </TagsArea>
      </InputContainer>
      {device !== "mobile" && <SubmitContainer />}
    </Wrapper>
  );
};

export default PostHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 6rem;
  @media (max-width: 568px) {
    padding: 1rem 0;
  }
`;

const InputContainer = styled.div`
  width: calc(60vw - 120px);
  min-width: 388px;
  display: flex;
  flex-direction: column;
  input {
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background: ${theme.COLORS.BG1};
  }
  #title {
    font-size: ${theme.FONT.HEAD1.fontSize};
    font-weight: ${theme.FONT.HEAD1.fontWeight};
    margin-bottom: 2rem;
    color: ${theme.COLORS.MAINDARK};
  }
  #tags {
    font-size: ${theme.FONT.HEAD4};
    max-width: 50%;
    color: #333333;
  }
  position: relative;
  hr {
    color: ${theme.COLORS.MAIN};
    background-color: ${theme.COLORS.MAIN};
    width: 100px;
    position: absolute;
    bottom: 30%;
    height: 5px;
    margin: 0;
    margin-bottom: 15px;
    border: none;
  }
  @media (max-width: 568px) {
    width: 100%;
    #title {
      font-size: ${theme.FONT.HEAD3.fontSize};
    }
    #tags {
      font-size: ${theme.FONT.HEAD6.fontSize};
    }
  }
`;

const TagsArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  p {
    border-radius: 20px;
    background-color: #e8e5db;
    padding: 5px 10px;
    margin: 0;
    margin-right: 8px;
    font-size: 24px;
  }
`;
