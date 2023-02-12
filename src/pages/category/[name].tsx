import type { NextPage } from "next";
import * as L from "@component/Layout";
import { Card } from "@component/Common";

const Home: NextPage = () => {
  return (
    <div>
      <L.Card>
        <Card title="asd" description="asdkljz" date="2022-10-11" />
      </L.Card>
    </div>
  );
};

export default Home;
