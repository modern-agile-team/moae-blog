import { useEffect, useState } from "react";

import * as S from "./styled";
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

  if (!doLoad) return <S.CardImage src={src} />;
  return <>{srcLoaded ? <S.CardImage src={srcLoaded} /> : <Loader />}</>;
};

export default CardImage;
