import styled from "styled-components";

interface Props {
  titleImage: string;
}

const Image = ({ titleImage }: Props) => {
  return <ImageDiv titleImage={titleImage} />;
};

export default Image;

const ImageDiv = styled.div<{
  titleImage: string;
}>`
  width: 100%;
  padding-top: 52%;
  border-radius: 6px 6px 0 0;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.titleImage});
`;
