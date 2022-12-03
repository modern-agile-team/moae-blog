import type { NextPage } from "next";
import { CardSection, Card } from "@component/Common";
import HotPosts from "@component/HotPosts/HotPosts";
import { useEffect, useState } from "react";

const randomSize = () => {
  return Math.floor(Math.random() * 1000);
};

const Home: NextPage = () => {
  const [postCount, setPostCont] = useState(30);
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", (e) => {
      const documentEl = window.document.documentElement;
      if (documentEl.scrollHeight - (window.scrollY + documentEl.clientHeight) < 300) {
        setPostCont(postCount + 30);
      }
    });
  }, [postCount]);

  return (
    <div>
      <HotPosts />
      <CardSection>
        {[
          "1"
            .repeat(postCount)
            .split("1")
            .map((el) => {
              return <Card {...cardProps} titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />;
            }),
        ]}
      </CardSection>
    </div>
  );
};

export default Home;
