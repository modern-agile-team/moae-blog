import type { NextPage } from "next";
import { CardSection, Card } from "@component/Common";
import { uuid } from "uuidv4";
import { cardProps } from "src/constant/test";

const Home: NextPage = () => {
  const posts = new Array(30).fill(cardProps);

  return (
    <div>
      <CardSection>
        {posts.map((post) => {
          return <Card key={uuid()} {...post} />;
        })}
      </CardSection>
    </div>
  );
};

export default Home;
