import { Avatar } from "../User";
import Profile from "../User/Profile";
import SectionWrapper from "./SectionWrapper";
interface Props {
  img?: string | null;
}

const UserSection = ({ img }: Props) => {
  const clickToLogout = () => {
    window.location.href = "/write";
  };

  return (
    <SectionWrapper>
      <Profile img={img} />
      <button className="login-btn" id="write-btn" onClick={clickToLogout}>
        글 작성
      </button>
    </SectionWrapper>
  );
};

export default UserSection;
