import * as S from "./styled";

interface Props {
  title: string;
  description: string;
  date: string;
}

const CardDescription = ({ title, description, date }: Props) => {
  const [year, mounth, day] = date.replace(/T[^Z]*Z/g, "").split("-");

  return (
    <S.Description>
      <div id="title">
        <h6>{title}</h6>
      </div>
      <div id="description">
        <p>{description.replace(/[`#*_,.`<>\{\}\[\]\\\/]/gim, "")}</p>
        <span>{`${year}년 ${mounth}월 ${day}일`}</span>
      </div>
    </S.Description>
  );
};

export default CardDescription;
