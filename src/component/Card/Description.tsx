import styled from "styled-components";
import theme from "@styles/theme";

interface Props {
  title: string;
  description: string;
  date: string;
}

const Description = ({ title, description, date }: Props) => {
  const [year, mounth, day] = date.split("-");

  return (
    <Wrapper>
      <div id="title">
        <h6>{title}</h6>
      </div>
      <div id="description">
        <p>{description}</p>
        <span>{`${year}년 ${mounth}월 ${day}일`}</span>
      </div>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${theme.COLORS.BG1};
  #title {
    h6 {
      height: 20px;
      overflow-wrap: break-word;
      word-break: break-word;
      overflow: hidden;
      margin: 0;
    }
  }
  #description {
    p {
      overflow-wrap: break-word;
      word-break: break-word;
      height: calc(${theme.FONT.SMALL.fontSize} * 1.5 * 3);
      font-size: ${theme.FONT.SMALL.fontSize};
      line-height: 1.5;
      overflow: hidden;
    }
    span {
      font-size: ${theme.FONT.SMALL.fontSize};
    }
  }
`;
