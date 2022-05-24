import Link from "next/link";
import { GoHome } from "react-icons/go";
import styled from "styled-components";
import theme from "../../styles/theme";

interface Props {
  user?: string;
}

const TitleSection = ({ user }: Props) => {
  return (
    <Wrapper>
      {!user ? (
        <h1>
          <Link href="/.">Moaeblog</Link>
        </h1>
      ) : (
        <div id="user">
          <GoHome
            onClick={() => {
              window.location.href = "/.";
            }}
          />
          <h1>
            <Link href={`/${user}`}>{user}</Link>
          </h1>
        </div>
      )}
    </Wrapper>
  );
};

export default TitleSection;

const Wrapper = styled.div`
  .title {
    display: flex;
  }
  #user {
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: 1rem;
    color: ${theme.COLORS.MAIN};
    svg {
      font-size: 40px;
      margin-right: 1rem;
      cursor: pointer;
    }
  }

  @media (max-width: 568px) {
    h1 {
      font-size: ${theme.FONT.HEAD4};
    }
  }
`;
