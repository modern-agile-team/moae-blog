import styled from "styled-components";

const CardLayout = styled.div`
  padding: 0 76px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: 100%;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default CardLayout;
