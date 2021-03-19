import styled from "styled-components";

const StyledTimer = styled.div`
  width: 4rem;
  background-color: white;
  height: 4rem;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  font-size: 1.5rem;
`;

export default function Timer({ value }) {
  return <StyledTimer>{value}</StyledTimer>;
}
