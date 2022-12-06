import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loader } from "../Loader";

interface Props {
  src: string;
  doLoad?: boolean;
}

const CardImage = ({ src, doLoad = true }: Props) => {
  const [srcLoaded, setSrcLoaded] = useState<string | null>(null);

  useEffect(() => {
    if (!doLoad) return;
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setSrcLoaded(src);
    };
  }, [doLoad, src]);

  if (!doLoad) return <StyledImage src={src} />;
  return <>{srcLoaded ? <StyledImage src={srcLoaded} /> : <Loader />}</>;
};

export default CardImage;

const StyledImage = styled.div<{
  src: string;
}>`
  width: 100%;
  padding-top: 52%;
  border-radius: 6px 6px 0 0;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
`;
