import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const StyledResult = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: -3px 3px 5px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;
const StyledH1 = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.primary};
  padding: 1rem 0;
`;
const StyledH2 = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

export default function Result({ score, streak, onTryAgain }) {
  if (score === undefined || streak === undefined) return <Redirect to="/" />;
  return (
    <StyledResult>
      <StyledH1>CONGRATULATIONS!</StyledH1>
      <StyledH1>YOUR SCORE</StyledH1>
      <StyledH2>{score}</StyledH2>
      <StyledH1>YOUR STREAK</StyledH1>
      <StyledH2>{streak}</StyledH2>
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <Button onClick={onTryAgain}>TRY AGAIN</Button>
      </div>
    </StyledResult>
  );
}
