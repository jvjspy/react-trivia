import styled from "styled-components";

const StyledButton = styled.button`
  appearance: none;
  border: 1px solid ${(props) => props.theme.primary};
  padding: 0.8rem 1rem;
  border-radius: 10rem;
  background-color: white;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
