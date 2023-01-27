import * as S from "./styled";

interface Props {
  userInfo: {
    profileImage: string;
    name: string;
  };
}

const CardFooter = ({ userInfo }: Props) => {
  return (
    <S.Footer>
      <div id="writer">
        <img src={userInfo.profileImage} alt="" />
        {userInfo.name}
      </div>
    </S.Footer>
  );
};

export default CardFooter;
