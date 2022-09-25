import type { NextPage } from "next";
import { CardSection, Card } from "@component/Common";
import HotPosts from "@component/HotPosts/HotPosts";

const Home: NextPage = () => {
  const userInfo = {
    profileImage: "https://picsum.photos/500/500",
    name: "아이유",
  };

  const cardProps = {
    id: "1231245",
    title: "타이틀",
    description: "내용",
    date: "2022-05-22",
    userInfo,
  };

  return (
    <div>
      <HotPosts />
      <CardSection>
        <Card {...cardProps} titleImage="https://picsum.photos/500/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/600/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/700/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/800/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/100/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/200/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/300/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/400/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/800/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/900/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/1000/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/400/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/250/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/270/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/200/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/320/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/640/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/1280/720" />
        <Card {...cardProps} titleImage="https://picsum.photos/2180/1280" />
        <Card {...cardProps} titleImage="https://picsum.photos/1400/700" />
        <Card {...cardProps} titleImage="https://picsum.photos/290/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/250/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/220/300" />
        <Card {...cardProps} titleImage="https://picsum.photos/270/300" />
      </CardSection>
    </div>
  );
};

export default Home;
