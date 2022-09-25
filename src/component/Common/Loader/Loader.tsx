import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div`
  position: relative;
  min-width: 70px;
  min-height: 70px;
  max-width: 150px;
  max-height: 150px;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotate} 3s linear infinite;
  background-color: ${theme.COLORS.MAINDARK};

  &::after {
    content: "";
    position: relative;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background-color: #fff;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50%;
    height: 50%;
    background-color: #fff;
  }
`;
