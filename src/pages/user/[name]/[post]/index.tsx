import { useRouter } from "next/router";
import { useQueries } from "react-query";

import { Loader } from "@component/Common/Loader";
import { CommentSection, PostArticle, PostContainer, PostHeader } from "@component/Posts";
import { API_KEYS } from "@core/constant";
import * as APIS from "@core/apis";

const Post = () => {
  const router = useRouter();

  const [posts, comment] = useQueries([
    {
      queryKey: [API_KEYS.BOARDS.GET_POST, router.query.post],
      queryFn: () => APIS.BOARDS.getPost(router.query.post as string),
      suspense: true,
      onError(error: any) {},
    },
    {
      queryKey: [API_KEYS.COMMENT.GET_COMMENT, router.query.post],
      queryFn: () => APIS.COMMENT.getComments(router.query.post as string),
      suspense: true,
      onError(error: any) {},
    },
  ]);

  return (
    <div>
      <PostContainer>
        {posts.isLoading || comment.isLoading ? (
          <Loader />
        ) : (
          <>
            <PostHeader {...posts.data!.data} user={posts.data!.data.user || ""} />
            <PostArticle {...posts.data!.data} />
            <CommentSection commentList={comment.data?.data} />
          </>
        )}
      </PostContainer>
    </div>
  );
};

export default Post;
