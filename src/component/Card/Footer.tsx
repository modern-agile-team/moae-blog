import styled from "styled-components";
import theme from "@styles/theme";

interface Props {
  userInfo: {
    profileImage: string;
    name: string;
  };
}

const Footer = ({ userInfo }: Props) => {
  return (
    <Wrapper>
      <div id="writer">
        <img src={userInfo.profileImage} alt="" />
        {userInfo.name}
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  padding-top: 0;
  background-color: ${theme.COLORS.BG1};
  #writer {
    display: flex;
    align-items: center;
    font-size: ${theme.FONT.SMALL.fontSize};
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
`;
