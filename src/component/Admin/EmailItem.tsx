import { useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";

interface Props {
  email: string;
}

const EmailItem = ({ email }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label id={`email-item-${email}`}>
      <Wrapper isChecked={isChecked}>
        <input id={`email-item-${email}`} type="checkbox" onChange={onChange} />
        {email}
      </Wrapper>
    </label>
  );
};

export default EmailItem;

const Wrapper = styled.li<{
  isChecked: boolean;
}>`
  border-bottom: 1px solid #a0a0a0;
  padding: 10px;
  background-color: ${theme.COLORS.BG1};
  ${({ isChecked }) => {
    switch (isChecked) {
      case true:
        return css`
          filter: brightness(90%);
          &:hover {
            filter: brightness(80%);
          }
        `;
      case false:
        return css`
          filter: brightness(100%);
          &:hover {
            filter: brightness(90%);
          }
        `;
    }
  }}
  cursor: pointer;

  input {
    display: none;
  }
`;
