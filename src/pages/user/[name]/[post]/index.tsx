import { Loader } from "@component/Common/Loader";
import { CommentSection, PostArticle, PostContainer, PostHeader } from "@component/Posts";
import { BOARDS } from "@core/apis";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { CommentType } from "src/types/comment";

const Post = () => {
  const router = useRouter();

  const commentList: CommentType[] = [
    {
      id: "",
      name: "아이유",
      date: "2022-05-22",
      description: "좋다 이거야ㅐ~~",
      img: "https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90",
    },
  ];

  const { isLoading, data: result } = useQuery(`getPost ${router.query.post}`, () =>
    BOARDS.getPost(router.query.post as string)
  );

  return (
    <div>
      <PostContainer>
        {isLoading && !result ? (
          <Loader />
        ) : (
          <>
            <PostHeader {...result!.data} writer={result!.data.user.name || ""} />
            <PostArticle {...result!.data} />
            <CommentSection commentList={commentList} />
          </>
        )}
      </PostContainer>
    </div>
  );
};

export default Post;
