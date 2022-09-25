import type { NextPage } from "next";
import { CardSection, Card } from "@component/Common";

const Home: NextPage = () => {
  const userInfo = {
    profileImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
    name: "아이유",
  };

  const cardProps = {
    id: "12398",
    title: "타이틀",
    description: "내용",
    date: "2022-05-22",
    userInfo,
    titleImage:
      "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
  };

  const posts = [
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
    {
      ...cardProps,
    },
  ];

  return (
    <div>
      <CardSection>
        {posts.map((post, index) => {
          return <Card key={index} {...post} />;
        })}
      </CardSection>
    </div>
  );
};

export default Home;
