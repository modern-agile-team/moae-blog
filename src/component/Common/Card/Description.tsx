import * as S from "./styled";

interface Props {
  title: string;
  description: string;
  date: string;
}

const CardDescription = ({ title, description, date }: Props) => {
  const [year, mounth, day] = date.split("-");

  return (
    <S.Description>
      <div id="title">
        <h6>{title}</h6>
      </div>
      <div id="description">
        <p>{description}</p>
        <span>{`${year}년 ${mounth}월 ${day}일`}</span>
      </div>
    </S.Description>
  );
};

export default CardDescription;
