import React from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { uuid } from "uuidv4";

interface Props {
  title: string;
  date: string;
  writer: string;
  tags?: string[];
}

const Header = ({ title, date, writer, tags }: Props) => {
  const [year, mounth, day] = date.split("-");
  return (
    <Wrapper>
      <Title>
        <h1>{title}</h1>
      </Title>
      <WriteInfo>
        <b>{writer}</b>
        <span>{`${year}년 ${mounth}월 ${day}일`}</span>
      </WriteInfo>
      {tags && (
        <Tags>
          {tags.map((tag, index) => {
            return (
              <li key={uuid()}>
                <button>{tag}</button>
              </li>
            );
          })}
        </Tags>
      )}
    </Wrapper>
  );
};

const PostHeader = React.memo(Header);

export default PostHeader;

const Wrapper = styled.div``;

const Title = styled.div`
  h1 {
    font-weight: bolder;
  }
  @media (max-width: 568px) {
    h1 {
      font-size: ${theme.FONT.HEAD3.fontSize};
    }
  }
`;

const WriteInfo = styled.div`
  b {
    margin-right: 15px;
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
