import type { NextPage } from "next";
import { uuid } from "uuidv4";

import { Card } from "@component/Common";
import { cardProps } from "@constant/test";
import * as L from "@component/Layout";

const Home: NextPage = () => {
  const posts = new Array(30).fill(cardProps);

  return (
    <div>
      <L.Card>
        {posts.map((post) => {
          return <Card key={uuid()} {...post} />;
        })}
      </L.Card>
    </div>
  );
};

export default Home;
