import { useMemo } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import deviceAtom from "@recoil/deviceAtom";
import theme from "@styles/theme";
import { Card, Carousel } from "@component/Common";
import * as T from "@core/types";

const HotPosts = ({ posts }: { posts: T.POST.PostType[] }) => {
  const device = useRecoilValue(deviceAtom);
  const router = useRouter();

  const slideToShow = useMemo(() => {
    switch (device) {
      case "desktop":
        return 4;
      case "laptop":
        return 3;
      case "tablet":
        return 2;
      case "mobile":
        return 1;
    }
  }, [device]);

  return (
    <Wrapper>
      <Carousel slideToShow={slideToShow} autoplaySpeed={100000000} isArrowShow={true} isAutoplay={true}>
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            date={post.createdAt}
            description={post.context}
            titleImage={post.thumbnail}
            onClick={() => router.push(`/user/${post.user.name}/${post.id}`)}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default HotPosts;

const Wrapper = styled.div`
  max-height: 700px;
  margin: 2rem 0 4rem 0;
  h3 {
    padding: 0 6rem;
    margin: 0;
    color: #ececec;
  }

  @media (max-width: 568px) {
    h3 {
      padding: 0 1rem;
      font-size: ${theme.FONT.HEAD5.fontSize};
    }
  }
`;
