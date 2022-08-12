import styled from "styled-components";

interface ITextInputType {
  id: string;
  type: "text" | "password" | "email";
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: ITextInputType) => {
  return (
    <Wrapper>
      <p>{props.placeholder}</p>
      <StyledInput {...props} placeholder="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    margin: 0;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 15px 0;
  padding: 16px 10px;
  border: none;
  border-bottom: 1px solid #c0c0c0;
  border-radius: 3px;
  color: #000000;
  box-shadow: 5px 5px 3px -5px rgb(60, 47, 37);
  transition: 0.3s;
  &:focus {
    box-shadow: 5px 5px 6px -3px rgb(48, 37, 30);
    outline: none;
  }
`;

export default TextInput;
