import { MdOutlineShare, MdOutlineThumbUpAlt, MdThumbUp } from "react-icons/md";
import styled from "styled-components";
import theme from "../../styles/theme";

interface Props {
  isLike: boolean;
  onClick: () => void;
}

const LikeAndShare = ({ isLike, onClick }: Props) => {
  return (
    <Wrapper>
      {isLike ? <MdThumbUp color="#ce4c4c" onClick={onClick} /> : <MdOutlineThumbUpAlt onClick={onClick} />}
      <MdOutlineShare />
    </Wrapper>
  );
};

export default LikeAndShare;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #d0d0d0;
  border-radius: 50px;
  padding: 0.875rem 0.5rem;
  font-size: 40px;
  background-color: #f5f6f6;
  svg {
    margin: 5px;
    border: 1px solid #d0d0d0;
    border-radius: 50%;
    padding: 8px;
    color: ${theme.COLORS.MAIN};
    background-color: #fff;
    cursor: pointer;
  }
`;
