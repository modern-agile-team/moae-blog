import { uuid } from "uuidv4";
import { useQuery, QueryClient, dehydrate } from "react-query";
//@ts-ignore
import safeJsonStringify from "safe-json-stringify";

import { Card } from "@component/Common";
import HotPosts from "@component/HotPosts/HotPosts";
import * as L from "@component/Layout";
import * as APIS from "@core/apis";
import { Loader } from "@component/Common/Loader";
import { useRouter } from "next/router";

const Home = () => {
  const { isLoading, error, data } = useQuery("getAllBoards", APIS.BOARDS.getAll, {
    refetchOnWindowFocus: false,
  });

  const randomSize = () => {
    return Math.floor(Math.random() * 1000);
  };

  const router = useRouter();

  return (
    <div>
      <HotPosts />
      <L.Card>
        {isLoading ? (
          <Loader />
        ) : (
          data!.data.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              date={post.createdAt}
              description={post.context}
              titleImage={`https://picsum.photos/${randomSize()}/${randomSize()}`}
              onClick={() => router.push(`/user/작성자이름/${post.id}`)}
            />
          ))
        )}
      </L.Card>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getAllBoards", APIS.BOARDS.getAll);
  return { props: { dehydratedState: JSON.parse(safeJsonStringify(dehydrate(queryClient))) } };
}
