import { useEffect, useState } from "react";

import * as S from "./styled";
import { Loader } from "../Loader";

import Logo from "@assets/images/logo.png";

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
    image.onerror = () => {
      setSrcLoaded("https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg");
    };
  }, [doLoad, src]);

  if (!doLoad) return <S.CardImage src={src} />;
  return <>{srcLoaded ? <S.CardImage src={srcLoaded} /> : <Loader />}</>;
};

export default CardImage;
