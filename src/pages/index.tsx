import { uuid } from "uuidv4";

import { Card } from "@component/Common";
import HotPosts from "@component/HotPosts/HotPosts";
import { cardProps } from "@constant/test";
import * as L from "@component/Layout";

const randomSize = () => {
  return Math.floor(Math.random() * 1000);
};

interface UserInfoType {
  profileImage: string;
  name: string;
}

interface CardType {
  id: string;
  title: string;
  description: string;
  date: string;
  userInfo: UserInfoType;
}
interface HomeProps {
  posts: CardType[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <div>
      <HotPosts />
      <L.Card>
        {posts.map((el) => (
          <Card key={uuid()} {...el} titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`} />
        ))}
      </L.Card>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const posts = [];

  for (let i = 0; i < 30; i++) {
    posts.push(cardProps);
  }

  return { props: { posts } };
}
