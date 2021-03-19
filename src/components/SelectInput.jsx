import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid ${(props) => props.theme.primary};
  font-size: 1.2rem;
  font-weight: bold;
  font-family: montserrat;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  width: 100%;
  outline: none;
`;

export default function SelectInput({ children, ...props }) {
  return <StyledSelect {...props}>{children}</StyledSelect>;
}
