import { useQuery, QueryClient, dehydrate } from "react-query";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
//@ts-ignore
import safeJsonStringify from "safe-json-stringify";

import { Card } from "@component/Common";
import HotPosts from "@component/HotPosts/HotPosts";
import * as L from "@component/Layout";
import APIS from "@core/apis";
import { Loader } from "@component/Common/Loader";
import { API_KEYS } from "@constant/index";

const Home = () => {
  const { isLoading, data } = useQuery(API_KEYS.BOARDS.GET_ALL, APIS.BOARDS.getAll);

  const router = useRouter();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data && data.data.length > 4 && <HotPosts posts={data!.data.slice(0, 10)} />}
          <L.Card>
            {data!.data.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                date={post.createdAt}
                description={post.context}
                titleImage={post.thumbnail}
                onClick={() => router.push(`/user/${post.user.name}/${post.id}`)}
              />
            ))}
          </L.Card>
        </>
      )}
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getAllBoards", APIS.BOARDS.getAll);
  return { props: { dehydratedState: JSON.parse(safeJsonStringify(dehydrate(queryClient))) } };
}
