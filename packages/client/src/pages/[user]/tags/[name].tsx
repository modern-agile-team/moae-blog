import { Card, CardSection } from "../../../component/Card";
import TopBar from "../../../component/TopBar/TopBar";

const TagName = () => {
  const categories = [
    {
      id: "1283078as",
      name: "React",
      link: "/soonki/tags/react",
    },
    {
      id: "1237uyxzc",
      name: "Typescript",
      link: "/soonki/tags/typescript",
    },
  ];

  const userInfo = {
    profileImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
    name: "아이유",
  };

  const cardProps = {
    id: "1231245",
    title: "타이틀",
    description: "내용",
    date: "2022-05-22",
    userInfo,
    titleImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
  };

  return (
    <div>
      <TopBar user="soonki" categories={categories} />
      <CardSection>
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
        <Card {...cardProps} />
      </CardSection>
    </div>
  );
};

export default TagName;
