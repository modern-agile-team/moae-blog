import React from "react";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

import theme from "@styles/theme";
import { formatData } from "@core/utils/index";
import { PostType } from "@core/types/post";
import { API_KEYS } from "@core/constant";
import * as API from "@core/apis";

const Header = ({ title, createdAt, user, categories }: PostType) => {
  const { year, month, day } = formatData(createdAt, "date");
  const session = useSession();
  const router = useRouter();

  const { mutate } = useMutation([API_KEYS.BOARDS.DELETE, router.query.post], API.BOARDS.deletePost, {
    onSuccess(data, variables, context) {
      console.log("::::::", data);
      alert("게시글이 삭제되었습니다.");
      router.push("/");
    },
    onError(error, variables, context) {
      console.error(":::::", error);
    },
  });

  return (
    <Wrapper>
      <Title>
        <h1>{title}</h1>
      </Title>
      <WriteInfo>
        <b>{user.name}</b>
        <span>{`${year}년 ${month}월 ${day}일`}</span>
        {user.email === session.data?.user?.email && (
          <div>
            <button
              id="modify"
              onClick={() => {
                router.push(`/modify/${router.query.post}`);
              }}
            >
              수정
            </button>
            <button
              id="delete"
              onClick={() => {
                if (confirm("게시글을 삭제하시겠습니까?")) {
                  mutate(`${router.query.post}`);
                }
              }}
            >
              삭제
            </button>
          </div>
        )}
      </WriteInfo>
      {/* {categories && (
        <Tags>
          {categories.map((tag, index) => {
            return (
              <li key={uuid()}>
                <button>{tag}</button>
              </li>
            );
          })}
        </Tags>
      )} */}
    </Wrapper>
  );
};

const PostHeader = React.memo(Header);

export default PostHeader;

const Wrapper = styled.div`
  padding-bottom: 16px;
  box-shadow: 0 5px 2px -2px ${theme.COLORS.MAIN_BRIGHT};
`;

const Title = styled.div`
  h1 {
    font-weight: bolder;
    color: ${theme.COLORS.MAINDARK};
  }
  @media (max-width: 568px) {
    h1 {
      font-size: ${theme.FONT.HEAD3.fontSize};
    }
  }
`;

const WriteInfo = styled.div`
  display: flex;
  gap: 15px;
  b {
    font-size: ${theme.FONT.HEAD5};
  }
  span {
    font-size: ${theme.FONT.HEAD5};
    font-weight: lighter;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    button {
      border: none;
      padding: 3px 7px;
      border-radius: 6px;
      &:hover {
        opacity: 0.8;
      }
      cursor: pointer;
    }
    #delete {
      background-color: #df2828;
      color: #fff;
    }
    #modify {
      background-color: ${theme.COLORS.MAIN_BRIGHT};
      color: #fff;
    }
  }
`;

const Tags = styled.ul`
  display: flex;
  margin-top: 1rem;
  li {
    margin-right: 15px;
  }
  button {
    color: ${theme.COLORS.MAINDARK};
    border-radius: 20px;
    border: none;
    background-color: #eaeaea;
    padding: 7px 18px;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  }
`;
